import { Component, OnInit } from '@angular/core';
import { botellas } from '../utils/botellas';
import * as AOS from 'aos';
import { HttpClient } from '@angular/common/http';
import { FormularioService } from '../services/formulario.service';


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

  mostrarModal: boolean = false;

  constructor(
    private http: HttpClient,
    private formularioService: FormularioService 
  ) {}

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
    });
    this.mostrarModal = true;
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
        alert('¡Formulario enviado correctamente!');
      },
      error: err => {
        console.error('Error al enviar:', err);
        alert('Hubo un problema al enviar el formulario.');
      }
    });
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  confirmarEdad(): void {
    this.mostrarModal = false;
  }

  rechazarEdad(): void {
    window.location.href = 'https://www.google.com';
  }
}
