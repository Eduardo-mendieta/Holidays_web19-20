import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alojamiento } from '../model/alojamiento.model';

@Injectable({
  providedIn: 'root'
})
export class AlojamientoService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:9898/enjoy-holidays';

    getAlojamiento() {
        return this.http.get<Alojamiento[]>(this.Url);
    }

    // tslint:disable-next-line: typedef-whitespace
    createAlojamiento(alojamiento: Alojamiento) {
        return this.http.post<Alojamiento>(this.Url, alojamiento);
    }
}
