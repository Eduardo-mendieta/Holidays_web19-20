import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
=======
import { BusquedaAlojamiento } from '../util/busqueda-alojamiento.util';
import { HttpListResponse } from '../http/List.http.respose';
>>>>>>> f034fe761dab19751688d2db76bc043f578108d6
import { Alojamiento } from '../model/alojamiento.model';

@Injectable({
  providedIn: 'root'
})
export class AlojamientoService {

<<<<<<< HEAD
  constructor(private http: HttpClient) { }

  Url = 'http://localhost:9898/enjoy-holidays';

    getAlojamiento() {
        return this.http.get<Alojamiento[]>(this.Url);
    }

    // tslint:disable-next-line: typedef-whitespace
    createAlojamiento(alojamiento: Alojamiento) {
        return this.http.post<Alojamiento>(this.Url, alojamiento);
    }
=======
/* ============================= VARIABLES ============================= */
  url = 'http://localhost:9898/enjoy-holidays/alojamientos/buscar';

/* ============================= CONSTRUCTORES ============================= */
  constructor(private httpClient: HttpClient) { }

/* ============================= MÉTODOS ============================= */

  getAlojamientosDisponibles(data: BusquedaAlojamiento) {
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get<HttpListResponse<Alojamiento>>(`${this.url}/${data.ciudad}/${data.huespedes}/${data.fechaInicial}/${data.fechaFinal}`);
  }
>>>>>>> f034fe761dab19751688d2db76bc043f578108d6
}
