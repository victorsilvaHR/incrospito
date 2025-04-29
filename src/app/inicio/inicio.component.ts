import { Component, OnInit } from '@angular/core';
import { botellas } from '../utils/botellas';
import * as AOS from 'aos';
import { HttpClient } from '@angular/common/http';

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



constructor(private http: HttpClient) {}

  ngOnInit(): void {
    AOS.init({
      duration: 1000, // duración por defecto de las animaciones
      once: true,     // animar solo una vez al hacer scroll
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
  
    this.http.post('https://tuservidor.com/formulario.php', datosFormulario)
      .subscribe(res => {
        console.log('Respuesta del servidor:', res);
      }, err => {
        console.error('Error al enviar:', err);
      });
  }
  cerrarModal() {
    this.mostrarModal = false;
  }
  confirmarEdad(): void {
    this.mostrarModal = false;
    // sessionStorage.setItem('mayorEdad', 'true'); // si quieres recordar
  }

  rechazarEdad(): void {
    window.location.href = 'https://www.google.com';
  }
  

}
