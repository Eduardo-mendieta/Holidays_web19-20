import { Component, OnInit } from '@angular/core';
import { Alojamiento } from '../../../model/alojamiento.model';
import { Router } from '@angular/router';
import { AlojamientoService } from '../../../service/alojamiento.service';

@Component({
  selector: 'app-edit-alojamiento',
  templateUrl: './edit-alojamiento.component.html',
  styleUrls: ['./edit-alojamiento.component.css']
})
export class EditAlojamientoComponent implements OnInit {

  alojamieto: Alojamiento = new Alojamiento();
  submitted = false;
  constructor(private reouter: Router, private service: AlojamientoService) { }

  ngOnInit(): void {
  }

  nuevoUsuario(): void {
    this.submitted = false;
    this.alojamieto = new Alojamiento();
  }

  // tslint:disable-next-line: typedef
  Editar() {
    this.service.editarAlojamiento(this.alojamieto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.alojamieto = new Alojamiento();
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.submitted = true;
    this.Editar();
  }

}
