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

<<<<<<< HEAD
    UrlUsuario = 'http://localhost:9898/enjoy-holidays/usuarios';
    UrlLogin = 'http://localhost:9898/enjoy-holidays/usuarios/login';

=======
<<<<<<< HEAD
    Url = 'http://localhost:9898/enjoy-holidays';

=======
    Url = 'http://localhost:9898/enjoy-holidays/usuarios';
    Url2 = 'http://localhost:9898/enjoy-holidays/usuarios/{correo}/{password}';
    
>>>>>>> f034fe761dab19751688d2db76bc043f578108d6
>>>>>>> f04f3fba5155ccc560f92ede3d076cca5f742fab
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
