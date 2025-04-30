import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
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

}
