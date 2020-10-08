import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../../../model/ciudad.model';
import { CiudadService } from '../../../service/ciudad.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BusquedaAlojamiento } from '../../../util/busqueda-alojamiento.util';
import { AlojamientoService } from '../../../service/alojamiento.service';
import { Alojamiento } from '../../../model/alojamiento.model';
import { ComunicacionAlojamientoService } from '../../../util/comunicacion-alojamiento.service';

@Component({
  selector: 'app-busqueda-alojamiento',
  templateUrl: './busqueda-alojamiento.component.html',
  styleUrls: ['./busqueda-alojamiento.component.css']
})
export class BusquedaAlojamientoComponent implements OnInit {

  /* ======================= VARIABLES ======================= */

  listaCiudades: Ciudad[];
  listaAlojamientos: Alojamiento[];

  datosBusqueda: BusquedaAlojamiento;
  formulario: FormGroup;
  fechaActual = new Date().toISOString().substring(0, 10);

  /* ======================= CONTRUCTORES ======================= */

  constructor(
    private ciudadService: CiudadService,
    private alojamientoService: AlojamientoService,
    private comunicador: ComunicacionAlojamientoService,
    private formBuider: FormBuilder) {
    this.formulario = this.formBuider.group({
      ciudad: ['Cuenca'],
      huespedes: ['1'],
      fecha_inicio: this.fechaActual,
      fecha_fin: this.fechaActual
    });
  }

  ngOnInit(): void {
    this.getCiudades();
  }

/* ======================= METODOS ======================= */

  getCiudades(){
    this.ciudadService.getCiudades().subscribe(
      data => {
        this.listaCiudades = data.respuesta;
      },
      error => {
        console.log('¡Servidor temporalmente fuera de servicio!');
      }
    );
  }


  enviar(data) {
    console.log(data);
    this.datosBusqueda = new BusquedaAlojamiento();
    this.datosBusqueda.ciudad = data.ciudad;
    this.datosBusqueda.huespedes = data.huespedes;
    this.datosBusqueda.fechaInicial = data.fecha_inicio;
    this.datosBusqueda.fechaFinal = data.fecha_fin;
    this.alojamientoService.getAlojamientosDisponibles(this.datosBusqueda).subscribe(
      datos => {
        console.log(datos);
        this.listaAlojamientos = datos.respuesta;
        this.comunicador.enviarDatosDiponibilidad(this.datosBusqueda);
        this.comunicador.enviarAlojamientosDisponibles(this.listaAlojamientos);
      },
      error => {
        console.log('¡Servidor temporalmente fuera de servicio!');
      }
    );
  }
}
