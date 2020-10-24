import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpCode } from 'src/app/http/Code.http.reponse';
import { Usuario } from '../../../model/usuario.model';
import { UsuarioService } from '../../../service/usuario.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

  correo: string;
  usuario: Usuario;
  usuarioLogeado = 0;

  constructor(private route: ActivatedRoute, private router: Router,
              private usuarioService: UsuarioService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.usuario = new Usuario();

    this.correo = this.route.snapshot.params['correo'];
    
    this.usuarioService.buscarpor(this.correo)
      .subscribe(data => {
        this.usuarioLogeado = data.codigo;
        this.usuario = data.respuesta;
        console.log(data);
        if (this.usuarioLogeado === HttpCode.OK) {
          console.log('Realizado con exito');
        } else {
          console.log('Problema al realiazar la transacción');
        }
      }, err => {
        alert(err);
      });
  }

  // tslint:disable-next-line: typedef
  updateEmployee() {
    this.usuarioService.updateUser(this.correo, this.usuario)
      .subscribe(data => console.log(data), error => console.log(error));
    this.usuario = new Usuario();
    this.goDetalles(this.usuario.correo);
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.updateEmployee();
  }

  // tslint:disable-next-line: typedef
  goDetalles(correo: string) {
    this.router.navigate(['usuarios/detalle', correo]);
  }

}
