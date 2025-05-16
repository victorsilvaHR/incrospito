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

  inicio = {
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  };
  cargando = false; 


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
    if (this.validarFormulario()) {
      this.cargando = true; 
      this.formularioService.guardarFormulario(this.inicio).subscribe({
        next: res => {
          console.log('Respuesta del servidor:', res);
          alert('¡Gracias por contactarnos. Le responderemos lo antes posible!');
          this.limpiarFormulario();
        },
        error: err => {
          console.error('Error al enviar:', err);
          alert('Hubo un problema al enviar el formulario.');
        },
        complete: () => {
          this.cargando = false; // Desactivar el loader
        }
      });
    }
  }

  validarFormulario(): boolean {
    if (!this.inicio.nombre && !this.inicio.correo && !this.inicio.asunto && !this.inicio.mensaje) {
      alert('Por favor, completa todos los campos.');
      return false;
    }
    return true;
  }

  limpiarFormulario() {
  this.inicio = {
      nombre: '',
      correo: '',
      asunto: '',
      mensaje: ''
    };
  }


}
