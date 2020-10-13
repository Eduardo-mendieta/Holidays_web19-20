import { Component, OnInit } from '@angular/core';
import { AlojamientoUtilService } from '../../util/alojamiento-util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AlojamientoUtilService.ubicacionActual = AlojamientoUtilService.HOME_PAGE;
  }

}
