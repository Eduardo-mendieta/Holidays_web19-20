import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Alojamiento } from '../../../model/alojamiento.model';
import { AlojamientoService } from '../../../service/alojamiento.service';
import { HttpClient } from '@angular/common/http';
import { HttpCode } from 'src/app/http/Code.http.reponse';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CiudadService } from '../../../service/ciudad.service';
import { Ciudad } from '../../../model/ciudad.model';
import { TipoVivienda } from '../../../model/tipo-vivienda.model';
import { TipoViviendaService } from '../../../service/tipo-vivienda.service';
import { ImagenAlojamientoService } from '../../../service/imagen-alojamiento.service';

@Component({
  selector: 'app-add-alojamiento',
  templateUrl: './add-alojamiento.component.html',
  styleUrls: ['./add-alojamiento.component.css']
})

export class AddAlojamientoComponent implements OnInit {

  userId: number;
  ciudadId: number;
  tipoId: number;

  formulario: FormGroup;
  listaCiudades: Array<Ciudad>;
  listaTipos: Array<TipoVivienda>;

  imagen: File;
  alojamiento: Alojamiento;
  submitted = false;
  constructor( private alojService: AlojamientoService,
               private ciudadService: CiudadService,
               private tipoViviendaService: TipoViviendaService,
               private imgService: ImagenAlojamientoService,
               private http: HttpClient,
               private formBuider: FormBuilder,
               private riuter: Router,
               private route: ActivatedRoute) {
    this.formulario = this.formBuider.group({
      descripcion: ['N/A'],
      ubicacion: ['N/A'],
      condiciones: ['N/A'],
      servicios: ['N/A'],
      huespedes: [0],
      camas: [0],
      banos: [0],
      habitaciones: [0],
      precio: [0],
      ciudad: ['Cuenca'],
      tipo: ['Departamento'],
      imagen: []
    });
  }

  ngOnInit(): void {
    this.ciudadService.getCiudades().subscribe(
      data => {
        this.listaCiudades = data.respuesta;
      },
      error => console.log('Error en el servidor')
    );

    this.tipoViviendaService.getTiposVivienda().subscribe(
      data => {
        this.listaTipos = data.respuesta;
      },
      error => console.log('Error en el servidor')
    );
  }


  onFileChange(event){
    this.imagen = event.target.files[0];
    const fr = new FileReader();
    fr.readAsDataURL(this.imagen);
  }

  enviar(values) {
    this.userId = this.route.snapshot.params['id'];
    this.ciudadId = values.ciudad;
    this.tipoId = values.tipo;
    this.alojamiento = new Alojamiento();
    this.alojamiento.descripcion = values.descripcion;
    this.alojamiento.ubicacion = values.ubicacion;
    this.alojamiento.condicionesUso = values.condiciones;
    this.alojamiento.servicios = values.servicios;
    this.alojamiento.numeroHuespedes = values.huespedes;
    this.alojamiento.numeroCamas = values.camas;
    this.alojamiento.numeroBanos = values.banos;
    this.alojamiento.numeroHabitaciones = values.habitaciones;
    this.alojamiento.precioPorNoche = values.precio;
    this.alojService.createAlojamiento(this.alojamiento, this.userId, this.ciudadId, this.tipoId).subscribe(
      data => {
        console.log('Creado exitosamente');
        this.alojamiento = data.respuesta;
        this.imgService.subirImagen(this.alojamiento.id, this.imagen).subscribe(
          respuesta => console.log('Agregado correctamente'),
          error => console.log('error de conexion')
        );
      },
      error => console.log('error de conexion')
    );
  }
}

