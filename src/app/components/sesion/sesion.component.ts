import { Component, OnInit, DoCheck } from '@angular/core';
import { AppUtil } from 'src/app/util/app.util';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  /* ============================ VARIABLES ================================ */

  sesion: boolean;

  /* ============================ CONSTRUCTORES ================================ */
  constructor() { }

  ngOnInit(): void {
    this.sesion = AppUtil.sesion;
  }

  /* ============================ MÉTODOS ================================ */
}
