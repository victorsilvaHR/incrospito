import { Component, OnInit } from '@angular/core';
import { botellas } from '../utils/botellas';
import * as AOS from 'aos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  botellas = botellas;

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 1000, // duración por defecto de las animaciones
      once: true,     // animar solo una vez al hacer scroll
    });
  }
}
