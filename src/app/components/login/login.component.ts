import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../service/usuario.service';
import { HttpCode } from '../../http/Code.http.reponse';
import { Router } from '@angular/router';
import { AppUtil } from 'src/app/util/app.util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupForm: FormGroup;
  usuarioLogeado = 0;
  correo: string;
  contrasena: string;

  constructor(private service: UsuarioService, private builder: FormBuilder,
              private router: Router) {
    this.signupForm = this.builder.group({
      correo: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  iniciarSesion(values) {
    this.correo = this.signupForm.get('correo').value;
    this.contrasena = this.signupForm.get('password').value;
    this.service.iniciarSesion(this.correo, this.contrasena).subscribe(
      data => {
        this.usuarioLogeado = data.codigo;
        console.log(data);
        if (this.usuarioLogeado === HttpCode.OK) {
          console.log('Acceso Permitido');
          AppUtil.sesion = true;
          this.goDetalles(this.correo);
        } else {
          console.log('Acceso Denegado');
        }
      },
      error => {
        console.log('¡Servidor temporalmente fuera de servicio!');
      }
    );
  }

  goDetalles(correo: string) {
    this.router.navigate(['usuarios/detalle', correo]);
  }
}
