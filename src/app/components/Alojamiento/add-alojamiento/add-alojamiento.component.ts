import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alojamiento } from '../../../model/alojamiento.model';
import { AlojamientoService } from '../../../service/alojamiento.service';

@Component({
  selector: 'app-add-alojamiento',
  templateUrl: './add-alojamiento.component.html',
  styleUrls: ['./add-alojamiento.component.css']
})
export class AddAlojamientoComponent implements OnInit {

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
  Guardar() {
    this.service.createAlojamiento(this.alojamieto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.alojamieto = new Alojamiento();
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.submitted = true;
    this.Guardar();
  }
}
