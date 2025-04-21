import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'contacto', component: ContactoComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
