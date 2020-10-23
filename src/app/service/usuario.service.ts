import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario.model';
import { HttpSimpleResponse } from '../http/simple.http.response';
import { Observable } from 'rxjs';
import { core } from '@angular/compiler';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    persona: Usuario;
    constructor(private httpClient: HttpClient) { }
    urlUsuario = 'http://localhost:9898/enjoy-holidays/usuarios';
    urlLogin = 'http://localhost:9898/enjoy-holidays/usuarios/login';


    // tslint:disable-next-line: ban-types
    createUser(usuario: Object): Observable<Object> {
        return this.httpClient.post(`${this.urlUsuario}`, usuario);
    }

    // tslint:disable-next-line: ban-types
    updateUser(id: number, value: any): Observable<Object> {
        return this.httpClient.put(`${this.urlUsuario}/${id}`, value);
    }

    buscarpor(correo: string) {
        return this.httpClient.get<HttpSimpleResponse>(`${this.urlUsuario}/${correo}`);
    }

    iniciarSesion(correo: string, password: string) {
        return this.httpClient.get<HttpSimpleResponse>(`${this.urlLogin}/${correo}/${password}`);
    }
}
