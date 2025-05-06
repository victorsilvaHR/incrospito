import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TerminosComponent } from './terminos/terminos.component';
import { PoliticaComponent } from './politica/politica.component';
import { BotellasComponent } from './botellas/botellas.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '', component: InicioComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'politica', component: PoliticaComponent },
  { path: 'botella/:id', component: BotellasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
