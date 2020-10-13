import { Component, OnInit } from '@angular/core';
import { Alojamiento } from '../../../model/alojamiento.model';
import { AlojamientoUtilService } from '../../../util/alojamiento-util.service';
import { AppUtilService } from '../../../util/app-util.service';
import { HttpCodeService } from '../../../http/http-code.service';

@Component({
  selector: 'app-listar-alojamiento-disponible',
  templateUrl: './listar-alojamiento-disponible.component.html',
  styleUrls: ['./listar-alojamiento-disponible.component.css']
})
export class ListarAlojamientoDisponibleComponent implements OnInit {

/* ======================= VARIABLES ======================= */
  listaAlojamientos: Alojamiento[];
  codigoRespuesta = 0;

  datosBusqueda = {
    ciudad: '',
    noHuespedes: '',
    fechaInicio: '',
    fechaFin: ''
  };

/* ======================= CONSTRUCTORES ======================= */
  constructor(
    private comunicadorAlojamiento: AlojamientoUtilService,
    private httpCode: HttpCodeService) {

  }

  ngOnInit(): void {
    AlojamientoUtilService.ubicacionActual = AlojamientoUtilService.LISTAR_ALOJ_PAGE;
    this.comunicadorAlojamiento.getAlojamientosDisponibles().subscribe(
      data => {
        this.listaAlojamientos = data.respuesta;
        this.codigoRespuesta = data.codigo;
        this.datosBusqueda.ciudad = AlojamientoUtilService.datosBusqueda.ciudad;
        this.datosBusqueda.noHuespedes = AlojamientoUtilService.datosBusqueda.noHuespedes;
        this.datosBusqueda.fechaInicio = AlojamientoUtilService.datosBusqueda.fechaInicio;
        this.datosBusqueda.fechaFin = AlojamientoUtilService.datosBusqueda.fechaFin;
      }
    );
  }

/* ======================= MÉTODOS ======================= */
isAppConnected() {
  return AppUtilService.estadoConexion;
}

getHttpCode() {
  return this.httpCode;
}

}
