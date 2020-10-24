import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpCode } from 'src/app/http/Code.http.reponse';
import { Usuario } from '../../../model/usuario.model';
import { UsuarioService } from '../../../service/usuario.service';
import { Alojamiento } from '../../../model/alojamiento.model';
import { AlojamientoService } from '../../../service/alojamiento.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  correo: string;
  usuario: Usuario;
  codigo = 0;

  constructor(private route: ActivatedRoute, private router: Router,
              private usuarioService: UsuarioService,
              private alojamientoServicio: AlojamientoService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.correo = this.route.snapshot.params['correo'];

    this.usuarioService.buscarpor(this.correo)
      .subscribe(data => {
        this.codigo = data.codigo;
        this.usuario = data.respuesta;
        console.log(data);
        if (this.codigo === HttpCode.OK) {
          console.log('Realizado con exito');
        } else {
          console.log('Problema al realiazar la transacción');
        }
      }, err => {
        console.log('Error en el componente de cuenta de usuario!');
      });

  }

  // tslint:disable-next-line: typedef
  editarUsu(correo: string) {
    this.router.navigate(['usuarios/editar', correo]);
  }

  // tslint:disable-next-line: typedef

  goToNuevoAlojamientoComponent() {
    this.router.navigate(['alojamientos/nuevo', this.usuario.id]);
  }

}
