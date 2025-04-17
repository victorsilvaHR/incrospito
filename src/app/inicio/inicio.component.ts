import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  showButton: boolean = false; // Controla la visibilidad del botón

  constructor() { }

  ngOnInit(): void {
    window.onscroll = () => {
      // Mostrar el botón cuando el usuario haga scroll hacia abajo
      this.showButton = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200);
    };
    this.checkScroll();

  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    // Mostrar el botón cuando el usuario haga scroll hacia abajo
    this.showButton = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200);
  }

  scrollToTop(): void {
    // Desplazarse hacia la parte superior de la página con animación
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
