import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Form, FormsModule} from "@angular/forms";
import { PeliculaBannerComponent } from './peliculas/pelicula-banner/pelicula-banner.component';
import { GrillaComponent } from './grilla/grilla.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaBannerComponent,
    GrillaComponent
  ], //definir todos los componentes a usarse
  // definir todos los pipes -> transformar los datos
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    ButtonModule, BrowserAnimationsModule, MatButtonModule,
  ], //definimos todos los modulos
  providers: [], // definimos los servicios
  bootstrap: [AppComponent] //componente principal
})
export class AppModule { }
//@algo decorator
