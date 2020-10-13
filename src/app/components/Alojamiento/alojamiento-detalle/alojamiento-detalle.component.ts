import { Component, OnInit, Input } from '@angular/core';
import { HttpCode } from '../../../http/Code.http.reponse';
import { ImagenAlojamientoService } from '../../../service/imagen-alojamiento.service';
import { AlojamientoService } from '../../../service/alojamiento.service';
import { Router } from '@angular/router';
import { ImagenAlojamiento } from '../../../model/imagen-alojamiento.model';
import { Alojamiento } from '../../../model/alojamiento.model';

@Component({
  selector: 'app-alojamiento-detalle',
  templateUrl: './alojamiento-detalle.component.html',
  styleUrls: ['./alojamiento-detalle.component.css']
})
export class AlojamientoDetalleComponent implements OnInit {

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

  vermas() {
    this.idAloj = this.alojamiento.id;

    if (this.idAloj === HttpCode.OK) {
        this.service.getAlojomientoID(this.idAloj).subscribe(
          data => {
            console.log(this.idAloj);
            this.router.navigate(['/app-alojamiento-detalle', this.idAloj]);
          }
        );
    } else {
      console.log('Error del sistema');
    }
  }
}