import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../service/usuario.service';
import { Usuario } from '../../../model/usuario.model';
import { logging } from 'protractor';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  submitted = false;
  constructor(private service: UsuarioService,
              private router: Router) { }

  ngOnInit(): void {
  }

  nuevoUsuario(): void {
    this.submitted = false;
    this.usuario = new Usuario();
  }

  // tslint:disable-next-line: typedef
  Guardar() {
    this.service.createUser(this.usuario)
      .subscribe(data => console.log(data), error => console.log(error));
    this.usuario = new Usuario();
    /*this.service.iniciarSesion(this.usuario.correo, this.usuario.password);*/
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.submitted = true;
    this.Guardar();
  }

}
