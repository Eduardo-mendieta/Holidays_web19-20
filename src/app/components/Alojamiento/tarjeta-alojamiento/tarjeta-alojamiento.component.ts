import { Component, OnInit, Input } from '@angular/core';
import { Alojamiento } from '../../../model/alojamiento.model';
import { ImagenAlojamiento } from '../../../model/imagen-alojamiento.model';
import { ImagenAlojamientoService } from '../../../service/imagen-alojamiento.service';
import { HttpListResponse } from '../../../http/List.http.respose';

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
  constructor(private imgService: ImagenAlojamientoService) { }

  ngOnInit(): void {
    if (this.alojamiento != null) { this.idAloj = this.alojamiento.id; }
    this.imgService.getImgsAlojamiento(this.idAloj).subscribe(
      data => {
        this.listaImgs = data.respuesta;
      }
    );
  }
/* ======================= MÉTODOS ======================= */

}
