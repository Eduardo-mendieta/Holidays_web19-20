import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupForm: FormGroup
  service:UsuarioService

  constructor(private builder: FormBuilder) {
    this.signupForm = this.builder.group({
      correo: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  getalojamiento(){
    this.service.getlogin(this.signupForm.get('correo').value, this.signupForm.get('password').value).subscribe(
      
    )
  }


  enviar(values){
    console.log(values)
  }

}
