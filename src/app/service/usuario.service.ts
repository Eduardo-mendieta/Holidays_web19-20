import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario.model';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private httpClient: HttpClient) { }

    Url = 'http://localhost:9898/enjoy-holidays/usuarios';
    
    getPersonas() {
        return this.httpClient.get<Usuario[]>(this.Url);
    }

    createUsuario(usuario: Usuario) {
        return this.httpClient.post<Usuario>(this.Url, usuario);
    }
}
