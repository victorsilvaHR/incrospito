import { Component, OnInit } from '@angular/core';
import { botellas } from '../utils/botellas';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {
  botellas = botellas;    
  showOptions = false;
       

  constructor() { }

  ngOnInit(): void {
  }

}
