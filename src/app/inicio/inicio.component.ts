import { Component, HostListener, OnInit } from '@angular/core';
import { botellas } from '../utils/botellas';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  botellas = botellas;           

  constructor() { }

  ngOnInit(): void {


  }

}
