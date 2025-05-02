import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormularioService } from '../services/formulario.service';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  nombre: string = '';
  correo: string = '';
  asunto: string = '';
  mensaje: string = '';


  constructor(
    private http: HttpClient,
    private formularioService: FormularioService 
  ) {}

  ngOnInit(): void {
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
