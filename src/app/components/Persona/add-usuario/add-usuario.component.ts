import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../service/usuario.service';
import { Usuario } from '../../../model/usuario.model';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  constructor(private reouter: Router, private service:UsuarioService) { }

  ngOnInit(): void {
  }

  Guardar() {
    this.service.createUsuario(this.usuario)
    .subscribe(data => {
      alert("Se Agrego nuevo Usuario");
    } )
  }
}
