import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  // URL del archivo PHP donde guardarás la información
  private apiUrl = 'https://tu-servidor.com/guardar_formulario.php';

  constructor(private http: HttpClient) { }

  // Función para enviar los datos al PHP
  guardarFormulario(datos: any): Observable<any> {
    return this.http.post(this.apiUrl, datos);
  }
}
