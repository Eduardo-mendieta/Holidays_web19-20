import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpListResponse } from '../http/List.http.respose';
import { ImagenAlojamiento } from '../model/imagen-alojamiento.model';
import { HttpSimpleResponse } from '../http/simple.http.response';

@Injectable({
  providedIn: 'root'
})
export class ImagenAlojamientoService {

  /* ============================= VARIABLES ============================= */

  url = 'http://localhost:9898/enjoy-holidays/alojamientos/img';

  /* ============================= CONTRUCTORES ============================= */

  constructor(private httpClient: HttpClient) { }

  /* ============================= MÉTODOS ============================= */

  subirImagen(alojId: number, imagen: File) {
    const formData = new FormData();
    formData.append('multipartFile', imagen);
    return this.httpClient.post<HttpSimpleResponse>(`${this.url}/${alojId}`, formData);
  }

  getImgsAlojamiento(alojId: number) {
    return this.httpClient.get<HttpListResponse<ImagenAlojamiento>>(`${this.url}/${alojId}`);
  }

  eliminarImagenesAlojamiento(alojId: number){
    return this.httpClient.delete<HttpSimpleResponse>(`${this.url}/${alojId}`);
  }
}
