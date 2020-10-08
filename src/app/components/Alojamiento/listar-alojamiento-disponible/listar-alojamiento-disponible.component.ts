import { Component, OnInit } from '@angular/core';
import { Alojamiento } from '../../../model/alojamiento.model';
import { ComunicacionAlojamientoService } from '../../../util/comunicacion-alojamiento.service';
import { BusquedaAlojamiento } from '../../../util/busqueda-alojamiento.util';

@Component({
  selector: 'app-listar-alojamiento-disponible',
  templateUrl: './listar-alojamiento-disponible.component.html',
  styleUrls: ['./listar-alojamiento-disponible.component.css']
})
export class ListarAlojamientoDisponibleComponent implements OnInit {

/* ======================= VARIABLES ======================= */
listaAlojamientos: Alojamiento[];
datosBusqueda: BusquedaAlojamiento;

/* ======================= CONSTRUCTORES ======================= */
  constructor(private comunicadorAlojamiento: ComunicacionAlojamientoService) { }

  ngOnInit(): void {
    this.comunicadorAlojamiento.getDatosBusqueda().subscribe(
      datosBusqueda => { this.datosBusqueda = datosBusqueda; }
    );
    this.comunicadorAlojamiento.getAlojamientosDisponibles().subscribe(
      listaAlojamientos => { this.listaAlojamientos = listaAlojamientos; }
    );
  }

/* ======================= MÉTODOS ======================= */

}
