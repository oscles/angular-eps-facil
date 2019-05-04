import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {IndexComponent} from './containers/index/index.component';
import {ContactoComponent} from './containers/contacto/contacto.component';
import {FuncionesComponent} from './containers/funciones/funciones.component';
import {GaleriaComponent} from './containers/galeria/galeria.component';
import {ServicesComponent} from './containers/services/services.component';
import {NoticiasComponent} from './containers/noticias/noticias.component';
import {TimetableComponent} from './containers/timetable/timetable.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'home', component: IndexComponent },
  { path: 'servicios', component: ServicesComponent },
  { path: 'features', component: FuncionesComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
