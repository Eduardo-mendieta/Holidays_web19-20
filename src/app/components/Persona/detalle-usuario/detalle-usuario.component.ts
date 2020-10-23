import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpCode } from 'src/app/http/Code.http.reponse';
import { Usuario } from '../../../model/usuario.model';
import { UsuarioService } from '../../../service/usuario.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  corre: string;
  usuario: Usuario;
  usuarioLogeado = 0;

  constructor(private route: ActivatedRoute, private router: Router,
              private usuarioService: UsuarioService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.usuario = new Usuario();

    this.corre = this.route.snapshot.params['correo'];

    this.usuarioService.buscarpor(this.corre)
      .subscribe(data => {
        this.usuarioLogeado = data.codigo;
        console.log(data);
        if (this.usuarioLogeado === HttpCode.OK) {
          console.log('Realizado con exito');
        } else {
          console.log('Proble al realiazar la transacción');
        }
      }, );

  }

  // tslint:disable-next-line: typedef
  editarUsu() {
    this.router.navigate(['usuarios/editar/:correo']);
  }


}
