import { Component, OnInit, Input } from '@angular/core';
import { Alojamiento } from '../../../model/alojamiento.model';
import { ImagenAlojamiento } from '../../../model/imagen-alojamiento.model';
import { ImagenAlojamientoService } from '../../../service/imagen-alojamiento.service';
import { HttpCode } from '../../../http/Code.http.reponse';
import { AlojamientoService } from '../../../service/alojamiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-alojamiento',
  templateUrl: './tarjeta-alojamiento.component.html',
  styleUrls: ['./tarjeta-alojamiento.component.css']
})
export class TarjetaAlojamientoComponent implements OnInit {

/* ======================= VARIABLES ======================= */
  @Input() alojamiento: Alojamiento;
  listaImgs: Array<ImagenAlojamiento> = new Array<ImagenAlojamiento>();
  idAloj = 0;


/* ======================= CONSTRUCTORES ======================= */
  constructor(private imgService: ImagenAlojamientoService, private service: AlojamientoService, private router: Router) { }

  ngOnInit(): void {
    if (this.alojamiento != null) { this.idAloj = this.alojamiento.id; }
    this.imgService.getImgsAlojamiento(this.idAloj).subscribe(
      data => {
        this.listaImgs = data.respuesta;
      }
    );
  }
/* ======================= MÉTODOS ======================= */

detalle(id: number) {
  if (this.idAloj !== 0) {
      this.service.getAlojomientoID(id).subscribe(
        () => {
          console.log(this.idAloj);
          this.router.navigate(['alojamientos/detalle', this.idAloj]);
        }
      );
  } else {
    console.log('Error del sistema');
    console.log(this.idAloj);
  }
}


}

