import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*import { BusquedaAlojamiento } from '../util/busqueda-alojamiento.util';*/
import { HttpListResponse } from '../http/List.http.respose';
import { Alojamiento } from '../model/alojamiento.model';
import { HttpSimpleResponse } from '../http/simple.http.response';
import { HttpObjectResponse } from '../http/http.object.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlojamientoService {

/* ============================= VARIABLES ============================= */
  urlBusqueda = 'http://localhost:9898/enjoy-holidays/alojamientos/buscar';
  UrlAlojamiento = 'http://localhost:9898/enjoy-holidays';
  UrlID = 'http://localhost:9898/enjoy-holidays/alojamientos';

/* ============================= CONSTRUCTORES ============================= */
  constructor(private httpClient: HttpClient) { }


/* ============================= MÉTODOS ============================= */
  /*getAlojamientosDisponibles(data: BusquedaAlojamiento) {
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get<HttpListResponse<Alojamiento>>
    (`${this.urlBusqueda}/${data.ciudad}/${data.huespedes}/${data.fechaInicial}/${data.fechaFinal}`);
  }*/

  getAlojamientosDisponibles(ciudad: string, noHuespedes: string,
                             fechaInicio: string, fechaFin: string) {
    return this.httpClient.get<HttpListResponse<Alojamiento>>(
      `${this.urlBusqueda}/${ciudad}/${noHuespedes}/${fechaInicio}/${fechaFin}`
    );
  }

  getAlojamientoByUsu(correo: string) {
    return this.httpClient.get<HttpListResponse<Alojamiento>>(`${this.UrlID}/${correo}`);
  }

  getAlojamiento() {
    return this.httpClient.get<Alojamiento[]>(this.UrlAlojamiento);
  }

  // tslint:disable-next-line: ban-types
  createAlojamiento(alojamiento: Object): Observable<Object> {
    return this.httpClient.post(`${this.UrlAlojamiento}`, alojamiento);
  }

  getAlojomientoID(id: number) {
    return this.httpClient.get<HttpObjectResponse<Alojamiento>>(`${this.UrlID}/${id}`);
  }

  // tslint:disable-next-line: ban-types
  editarAlojamiento(alojamiento: Object): Observable<Object> {
    return this.httpClient.put(`${this.UrlID}`, alojamiento);
  }
}
