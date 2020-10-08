import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpListResponse } from '../http/List.http.respose';
import { ImagenAlojamiento } from '../model/imagen-alojamiento.model';

@Injectable({
  providedIn: 'root'
})
export class ImagenAlojamientoService {

  /* ============================= VARIABLES ============================= */

  url = 'http://localhost:9898/enjoy-holidays/alojamientos/img';

  /* ============================= CONTRUCTORES ============================= */

  constructor(private httpClient: HttpClient) { }

  /* ============================= MÉTODOS ============================= */

  getImgsAlojamiento(alojId: number) {
    return this.httpClient.get<HttpListResponse<ImagenAlojamiento>>(`${this.url}/${alojId}`);
  }
}
