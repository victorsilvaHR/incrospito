import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'incrospito';
  mostrarModal: boolean = false;


  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0); // Esto hace que la vista inicie desde arriba sin scroll animado
      });
  }
  ngOnInit(): void {
    const yaMostrado = localStorage.getItem('modalEdad');

    if (!yaMostrado) {
      this.mostrarModal = true;
      localStorage.setItem('modalEdad', 'true');
    }
  }

  confirmarEdad(): void {
    this.mostrarModal = false;
  }

  rechazarEdad(): void {
    window.location.href = 'https://www.google.com';
  }
}

