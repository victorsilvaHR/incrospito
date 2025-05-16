import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormularioService } from '../services/formulario.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  contacto = {
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

  ngOnInit(): void {}

  enviarFormulario() {
    if (this.validarFormulario()) {
      this.cargando = true; 
      this.formularioService.guardarFormulario(this.contacto).subscribe({
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
    if (!this.contacto.nombre || !this.contacto.correo || !this.contacto.asunto || !this.contacto.mensaje) {
      alert('Por favor, completa todos los campos.');
      return false;
    }
    return true;
  }

  limpiarFormulario() {
    this.contacto = {
      nombre: '',
      correo: '',
      asunto: '',
      mensaje: ''
    };
  }
}
