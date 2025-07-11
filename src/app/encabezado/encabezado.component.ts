import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { botellas } from 'src/app/utils/botellas';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {
  titulo: string = '';
  subtitulo: string = '';
  esInicio: boolean = false; 
  esMovil: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.detectarVistaMovil();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const url = this.router.url;
      this.setTitulo(url);
    });

    // Cargar al iniciar
    this.setTitulo(this.router.url);
  }

  @HostListener('window:resize', [])
  detectarVistaMovil() {
    this.esMovil = window.innerWidth <= 768;
  }

  setTitulo(url: string) {
    this.esInicio = url === '/';

    const rutasEstaticas: { [key: string]: string } = {
      '/quienes-somos': 'QUIÉNES SOMOS',
      '/tienda': 'TIENDA',
      '/contacto': 'CONTACTO',
      '/terminos': 'TÉRMINOS Y CONDICIONES',
      '/politica': 'POLÍTICA DE PRIVACIDAD'
    };

    const botellaMatch = url.match(/\/botella\/(\d+)/);
    if (botellaMatch) {
      const id = parseInt(botellaMatch[1], 10);
      const botella = botellas.find(b => b.id === id);

      if (botella) {
        this.titulo = botella.name;
        this.subtitulo = `Inicio / Mezcal Incrospito / ${botella.name}`;
      } else {
        this.titulo = 'PRODUCTO NO ENCONTRADO';
        this.subtitulo = '';
      }
      return;
    }

    this.titulo = rutasEstaticas[url] || '';
    this.subtitulo = this.titulo ? `Inicio / ${this.titulo}` : '';
  }
}
