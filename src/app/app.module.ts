import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './containers/index/index.component';
import { ServicesComponent } from './containers/services/services.component';
import { TimetableComponent } from './containers/timetable/timetable.component';
import { NoticiasComponent } from './containers/noticias/noticias.component';
import { GaleriaComponent } from './containers/galeria/galeria.component';
import { ContactoComponent } from './containers/contacto/contacto.component';
import { FuncionesComponent } from './containers/funciones/funciones.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    ServicesComponent,
    TimetableComponent,
    NoticiasComponent,
    GaleriaComponent,
    ContactoComponent,
    FuncionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
