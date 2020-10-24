import { Component, OnInit } from '@angular/core';
import { Alojamiento } from '../../../model/alojamiento.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AlojamientoService } from '../../../service/alojamiento.service';

@Component({
  selector: 'app-edit-alojamiento',
  templateUrl: './edit-alojamiento.component.html',
  styleUrls: ['./edit-alojamiento.component.css']
})
export class EditAlojamientoComponent implements OnInit {

  alojamieto: Alojamiento;
  submitted = false;
  constructor(private reouter: Router, private service: AlojamientoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.service.getAlojomientoID(id).subscribe(data => {
      this.alojamieto = data.respuesta;
    }, err => {
      alert(err);
    });
  }

  nuevoUsuario(): void {
    this.submitted = false;
    this.alojamieto = new Alojamiento();
  }

  // tslint:disable-next-line: typedef
  Editar(alo: Alojamiento) {
    this.service.editarAlojamiento(alo)
      .subscribe(data => console.log(data), error => console.log(error));
    this.alojamieto = new Alojamiento();
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.submitted = true;
    this.Editar(this.alojamieto);
  }

}
