import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-flecha-arriba',
  templateUrl: './flecha-arriba.component.html',
  styleUrls: ['./flecha-arriba.component.scss']
})
export class FlechaArribaComponent implements OnInit {
  showButton: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    this.showButton = scrollY > 200;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
