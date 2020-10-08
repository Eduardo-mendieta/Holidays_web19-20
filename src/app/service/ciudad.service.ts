import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpListResponse } from '../http/List.http.respose';
import { Ciudad } from '../model/ciudad.model';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {


  /* ============================= VARIABLES ============================= */

  url = 'http://localhost:9898/enjoy-holidays/ciudades';

  /* ============================= CONTRUCTORES ============================= */

  constructor(private httpClient: HttpClient) { }

  /* ============================= MÉTODOS ============================= */

  getCiudades() {
    return this.httpClient.get<HttpListResponse<Ciudad>>(this.url);
  }
}
