import { Component, OnInit } from '@angular/core';
import { botellas } from '../utils/botellas';
import * as AOS from 'aos';
import { HttpClient } from '@angular/common/http';
import { FormularioService } from '../services/formulario.service';
import { AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  botellas = botellas;

  nombre: string = '';
  correo: string = '';
  asunto: string = '';
  mensaje: string = '';


  constructor(
    private http: HttpClient,
    private formularioService: FormularioService 
  ) {}

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,    });
  }
  ngAfterViewInit(): void {
    AOS.refresh();
  }

  enviarFormulario() {
    const datosFormulario = {
      nombre: this.nombre,
      correo: this.correo,
      asunto: this.asunto,
      mensaje: this.mensaje
    };

    this.formularioService.guardarFormulario(datosFormulario).subscribe({
      next: res => {
        console.log('Respuesta del servidor:', res);
        alert('¡Gracias por contactarnos. Le responderemos lo antes posible.!');

        this.nombre = '';
        this.correo = '';
        this.asunto = '';
        this.mensaje = '';
      },
      error: err => {
        console.error('Error al enviar:', err);
        alert('Hubo un problema al enviar el formulario.');
      }
    });
  }


}
