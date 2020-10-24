import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alojamiento } from '../../../model/alojamiento.model';
import { AlojamientoService } from '../../../service/alojamiento.service';
import { HttpClient } from '@angular/common/http';
import { HttpCode } from 'src/app/http/Code.http.reponse';

@Component({
  selector: 'app-add-alojamiento',
  templateUrl: './add-alojamiento.component.html',
  styleUrls: ['./add-alojamiento.component.css']
})

export class AddAlojamientoComponent implements OnInit {
  selectedFile: File = null;
  alojamiento: Alojamiento = new Alojamiento();
  submitted = false;
  constructor( private service: AlojamientoService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  nuevoUsuario(): void {
    this.submitted = false;
    this.alojamiento = new Alojamiento();
  }

  // tslint:disable-next-line: typedef
  /*Guardar() {
    this.service.createAlojamiento(this.alojamiento)
      .subscribe(data => {console.log(data),
      //this.alojamiento = data.respuesta;}
      //error => console.log(error));
    this.alojamiento = new Alojamiento();
  }*/

  Guardar() {
    this.service.createAlojamiento(this.alojamiento)
      .subscribe(data => console.log(data), error => console.log(error));
    this.alojamiento = new Alojamiento();
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.submitted = true;
    this.Guardar();
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  CargarImagen() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:9898/enjoy-holidays/alojamientos/img', fd)
    .subscribe(res => {
      console.log(res);
    });
  }
}

