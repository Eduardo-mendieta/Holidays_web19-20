import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpListResponse } from '../http/List.http.respose';
import { TipoVivienda } from '../model/tipo-vivienda.model';

@Injectable({
  providedIn: 'root'
})
export class TipoViviendaService {

  url = 'http://localhost:9898/enjoy-holidays/tipoViviendas';
  constructor(private httpClient: HttpClient) { }

  /* ============================ MÉTODOS ============================ */
  getTiposVivienda(){
    return this.httpClient.get<HttpListResponse<TipoVivienda>>(this.url);
  }
}
