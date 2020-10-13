import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alojamiento } from '../model/alojamiento.model';
import { HttpListResponse } from '../http/List.http.respose';

@Injectable({
  providedIn: 'root'
})
export class AlojamientoUtilService {

/* ============================ VARIABLES ============================ */

  static datosBusqueda = {
    ciudad: 'Cuenca',
    noHuespedes: '1',
    fechaInicio: AlojamientoUtilService.defaultDate(new Date(), 1),
    fechaFin: AlojamientoUtilService.defaultDate(new Date(), 2)
  };

  static HOME_PAGE = 1;
  static LISTAR_ALOJ_PAGE = 2;
  static ubicacionActual: number;

  private comunicadorAlojamiento = new Subject<HttpListResponse<Alojamiento>>();
  private observableAlojamiento = this.comunicadorAlojamiento.asObservable();

/* ============================ CONSTRUCTORES ============================ */
  constructor() { }

/* ============================ MÉTODOS ============================ */

  private static defaultDate(fecha: Date, numDias: number) {
    fecha.setDate(fecha.getDate() + numDias);
    return fecha.toISOString().substring(0, 10);
  }

  enviarAlojamientosDisponibles(data: HttpListResponse<Alojamiento>) {
    this.comunicadorAlojamiento.next(data);
  }

  getAlojamientosDisponibles() {
    return this.observableAlojamiento;
  }
}
