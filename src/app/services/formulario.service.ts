import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  // Define la URL como propiedad de la clase
  private apiUrl = 'https://solu-tec.net/api/php/incrospitoMail.php';

  constructor(private http: HttpClient) { }

  // Función para enviar los datos al PHP
  guardarFormulario(datos: any): Observable<any> {
    return this.http.post(this.apiUrl, datos);
  }
}
