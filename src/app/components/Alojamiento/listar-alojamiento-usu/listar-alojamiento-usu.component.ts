import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpObjectResponse } from '../../../http/http.object.response';
import { Alojamiento } from '../../../model/alojamiento.model';
import { AlojamientoService } from '../../../service/alojamiento.service';
import { Usuario } from '../../../model/usuario.model';
import { HttpCode } from 'src/app/http/Code.http.reponse';

@Component({
  selector: 'app-listar-alojamiento-usu',
  templateUrl: './listar-alojamiento-usu.component.html',
  styleUrls: ['./listar-alojamiento-usu.component.css']
})
export class ListarAlojamientoUsuComponent implements OnInit {

  usuario: Usuario;
  alojamientos: Array<Alojamiento>;
  usuarioLogeado = 0;

  constructor(private route: ActivatedRoute,
              private alojamientoService: AlojamientoService,
              private router: Router) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.usuario = new Usuario();

    this.usuario.correo = this.route.snapshot.params['correo'];

    this.alojamientoService.getAlojamientoByUsu(this.usuario.correo)
      .subscribe(data => {
        this.usuarioLogeado = data.codigo;
        this.alojamientos = data.respuesta;
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

}
