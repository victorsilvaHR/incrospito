import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { botellas } from '../utils/botellas';

@Component({
  selector: 'app-botellas',
  templateUrl: './botellas.component.html',
  styleUrls: ['./botellas.component.scss']
})
export class BotellasComponent implements OnInit {

  botellasData = botellas;
  botella: any;
  vistasRecientes: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Cargar vistas recientes desde localStorage al iniciar
    const guardadas = localStorage.getItem('vistasRecientes');
    if (guardadas) {
      this.vistasRecientes = JSON.parse(guardadas);
    }

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      const botellaSeleccionada = this.botellasData.find(b => b.id === id);

      if (botellaSeleccionada) {
        this.botella = botellaSeleccionada;
        this.agregarAVistasRecientes(botellaSeleccionada);
      }
    });
  }

  agregarAVistasRecientes(botella: any) {
    const yaExiste = this.vistasRecientes.find(b => b.id === botella.id);
    if (!yaExiste) {
      this.vistasRecientes.unshift(botella);
    } else {
      // Mover al inicio si ya existe (para evitar duplicados y actualizar el orden)
      this.vistasRecientes = this.vistasRecientes.filter(b => b.id !== botella.id);
      this.vistasRecientes.unshift(botella);
    }

    // Limitar a máximo 5 productos
    if (this.vistasRecientes.length > 5) {
      this.vistasRecientes = this.vistasRecientes.slice(0, 5);
    }

    // Guardar en localStorage
    localStorage.setItem('vistasRecientes', JSON.stringify(this.vistasRecientes));
  }
}
