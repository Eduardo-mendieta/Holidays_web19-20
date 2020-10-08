import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusquedaAlojamiento } from '../util/busqueda-alojamiento.util';
import { HttpListResponse } from '../http/List.http.respose';
import { Alojamiento } from '../model/alojamiento.model';

@Injectable({
  providedIn: 'root'
})
export class AlojamientoService {

/* ============================= VARIABLES ============================= */
  url = 'http://localhost:9898/enjoy-holidays/alojamientos/buscar';

/* ============================= CONSTRUCTORES ============================= */
  constructor(private httpClient: HttpClient) { }

/* ============================= MÉTODOS ============================= */

  getAlojamientosDisponibles(data: BusquedaAlojamiento) {
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get<HttpListResponse<Alojamiento>>(`${this.url}/${data.ciudad}/${data.huespedes}/${data.fechaInicial}/${data.fechaFinal}`);
  }
}
