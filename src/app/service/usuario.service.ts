import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario.model';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    persona:Usuario;
    constructor(private httpClient: HttpClient) { }

<<<<<<< HEAD
    Url = 'http://localhost:9898/enjoy-holidays';

=======
    Url = 'http://localhost:9898/enjoy-holidays/usuarios';
    Url2 = 'http://localhost:9898/enjoy-holidays/usuarios/{correo}/{password}';
    
>>>>>>> f034fe761dab19751688d2db76bc043f578108d6
    getPersonas() {
        return this.httpClient.get<Usuario[]>(this.Url);
    }

    createUsuario(usuario: Usuario) {
        return this.httpClient.post<Usuario>(this.Url, usuario);
    }

    getlogin(correo:String, password:String){
        return this.httpClient.get<Usuario>(this.Url2);

    }
}
