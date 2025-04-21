import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FlechaArribaComponent } from './flecha-arriba/flecha-arriba.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuienesSomosComponent,
    TiendaComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent,
    FlechaArribaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
