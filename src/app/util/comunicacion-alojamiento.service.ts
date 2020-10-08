import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Alojamiento } from '../model/alojamiento.model';
import { BusquedaAlojamiento } from './busqueda-alojamiento.util';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionAlojamientoService {

  /* =========================== VARIABLES =========================== */
  private comunicadorAlojamiento = new Subject<Alojamiento[]>();
  private comunicadorDatosBusqueda = new Subject<BusquedaAlojamiento>();

  private observableAlojamiento = this.comunicadorAlojamiento.asObservable();
  private observableDatosBusqueda = this.comunicadorDatosBusqueda.asObservable();

  /* =========================== CONSTRUCTORES =========================== */
  constructor() { }

  /* =========================== MÉTODOS =========================== */
  enviarAlojamientosDisponibles(listaAlojamientos: Alojamiento[]) {
    this.comunicadorAlojamiento.next(listaAlojamientos);
  }

  getAlojamientosDisponibles() {
    return this.observableAlojamiento;
  }

  enviarDatosDiponibilidad(datosBusqueda: BusquedaAlojamiento){
    this.comunicadorDatosBusqueda.next(datosBusqueda);
  }

  getDatosBusqueda(){
    return this.observableDatosBusqueda;
  }
}
