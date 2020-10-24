import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../../../model/ciudad.model';
import { CiudadService } from '../../../service/ciudad.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUtilService } from '../../../util/app-util.service';
import { AlojamientoUtilService } from '../../../util/alojamiento-util.service';
import { AlojamientoService } from 'src/app/service/alojamiento.service';

@Component({
  selector: 'app-busqueda-alojamiento',
  templateUrl: './busqueda-alojamiento.component.html',
  styleUrls: ['./busqueda-alojamiento.component.css']
})
export class BusquedaAlojamientoComponent implements OnInit {


  /* ======================= VARIABLES ======================= */

  listaCiudades: Ciudad[];
  formulario: FormGroup; 

  /* ======================= CONTRUCTORES ======================= */

  constructor(private ciudadService: CiudadService, private alojService: AlojamientoService,
              private comunicador: AlojamientoUtilService,
              private formBuider: FormBuilder, private router: Router) {
    this.formulario = this.formBuider.group({
      ciudad: [AlojamientoUtilService.datosBusqueda.ciudad],
      huespedes: [AlojamientoUtilService.datosBusqueda.noHuespedes],
      fecha_inicio: [AlojamientoUtilService.datosBusqueda.fechaInicio],
      fecha_fin: [AlojamientoUtilService.datosBusqueda.fechaFin]
    });
  }

  ngOnInit(): void {
    this.getCiudades();
    if (AlojamientoUtilService.ubicacionActual === AlojamientoUtilService.LISTAR_ALOJ_PAGE) {
      this.enviar(this.formulario.value);
    }
  }

/* ======================= METODOS ======================= */

  getCiudades(){
    this.ciudadService.getCiudades().subscribe(
      data => {
        this.listaCiudades = data.respuesta;
        AppUtilService.estadoConexion = true;
      },
      error => {
        console.log('¡Servidor temporalmente fuera de servicio!');
        AppUtilService.estadoConexion = false;
      }
    );
  }


  enviar(datosBusqueda) {
    AlojamientoUtilService.datosBusqueda.ciudad = datosBusqueda.ciudad;
    AlojamientoUtilService.datosBusqueda.noHuespedes = datosBusqueda.huespedes;
    AlojamientoUtilService.datosBusqueda.fechaInicio = datosBusqueda.fecha_inicio;
    AlojamientoUtilService.datosBusqueda.fechaFin = datosBusqueda.fecha_fin;
    console.log(datosBusqueda);
    this.alojService.getAlojamientosDisponibles(
      AlojamientoUtilService.datosBusqueda.ciudad,
      AlojamientoUtilService.datosBusqueda.noHuespedes,
      AlojamientoUtilService.datosBusqueda.fechaInicio,
      AlojamientoUtilService.datosBusqueda.fechaFin
    ).subscribe(
      data => {
        console.log(data.respuesta);
        AppUtilService.estadoConexion = true;
        this.comunicador.enviarAlojamientosDisponibles(data);
        if (AlojamientoUtilService.ubicacionActual === AlojamientoUtilService.HOME_PAGE) {
          this.router.navigate(['/alojamientos/buscar']);
        }
      },
      error => {
        console.log('¡Servidor temporalmente fuera de servicio!');
        AppUtilService.estadoConexion = false;
        if (AlojamientoUtilService.ubicacionActual === AlojamientoUtilService.HOME_PAGE) {
          this.router.navigate(['/alojamientos/buscar']);
        }
      }
    );
  }
}
