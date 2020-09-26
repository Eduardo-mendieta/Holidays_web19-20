import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EnjoyHolidaysAngularApp';

  constructor(private router: Router){}

  crearUsuario() {
    this.router.navigate(["crearUsuario"]);
  }

  listarUsuario() {
    this.router.navigate(["listarUSuario"]);
  }

  editarUsuario() {
    this.router.navigate(["editarUsuario"]);
  }
}
