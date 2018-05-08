import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ], //definir todos los componentes a usarse
  // definir todos los pipes -> transformar los datos
  imports: [
    BrowserModule
  ], //definimos todos los modulos
  providers: [], // definimos los servicios
  bootstrap: [AppComponent] //componente principal
})
export class AppModule { }
//@algo decorator
