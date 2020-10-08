import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario.model';
import { HttpSimpleResponse } from '../http/simple.http.response';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    persona: Usuario;
    constructor(private httpClient: HttpClient) { }

    UrlUsuario = 'http://localhost:9898/enjoy-holidays/usuarios';
    UrlLogin = 'http://localhost:9898/enjoy-holidays/usuarios/login';

    getPersonas() {
        return this.httpClient.get<Usuario[]>(this.UrlUsuario);
    }

    createUsuario(usuario: Usuario) {
        return this.httpClient.post<Usuario>(this.UrlUsuario, usuario);
    }

    iniciarSesion(correo: string, password: string) {
        return this.httpClient.get<HttpSimpleResponse>(`${this.UrlLogin}/${correo}/${password}`);
    }
}
