import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpObjectResponse } from '../../../http/http.object.response';
import { Alojamiento } from '../../../model/alojamiento.model';
import { AlojamientoService } from '../../../service/alojamiento.service';
import { Usuario } from '../../../model/usuario.model';
import { HttpCode } from 'src/app/http/Code.http.reponse';
import { ImagenAlojamientoService } from '../../../service/imagen-alojamiento.service';

@Component({
  selector: 'app-listar-alojamiento-usu',
  templateUrl: './listar-alojamiento-usu.component.html',
  styleUrls: ['./listar-alojamiento-usu.component.css']
})
export class ListarAlojamientoUsuComponent implements OnInit {

  @Input() correo: string;
  @Input() alojamiento: Alojamiento;
  alojamientos: Array<Alojamiento>;
  codigo = 0;
  idAloj = 0;
  constructor(private route: ActivatedRoute,
              private alojamientoService: AlojamientoService,
              private imgAlojService: ImagenAlojamientoService,
              private router: Router) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.idAloj = this.alojamiento.id;

    this.alojamientoService.getAlojamientoByUsu(this.correo)
      .subscribe(data => {
        this.codigo = data.codigo;
        this.alojamientos = data.respuesta;
        console.log(data);
        if (this.codigo === HttpCode.OK) {
          console.log('Realizado con exito');
        } else {
          console.log('Problema al realiazar la transacción');
        }
      }, err => {
        console.log('error al traer lo alojamientos del usuario!')
      });

  }

  /* ========================== MÉTODOS ============================== */
  eliminarAlojamiento(idAloj: number){
    this.imgAlojService.eliminarImagenesAlojamiento(idAloj).subscribe(
      data => {
        this.alojamientoService.eliminarAlojamiento(idAloj).subscribe;
      }
    );
  }

  detalle(id: number) {
    if (this.idAloj !== 0) {
        this.alojamientoService.getAlojomientoID(id).subscribe(
          () => {
            console.log(this.idAloj);
            this.router.navigate(['alojamientos/editar', this.idAloj]);
          }
        );
    } else {
      console.log('Error del sistema');
      console.log(this.idAloj);
    }

  /*editarAlo(alojamiento: Alojamiento) {
    this.router.navigate(['alojamientos/editar', alojamiento]);
  }*/
}
}
