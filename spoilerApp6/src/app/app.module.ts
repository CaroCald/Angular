import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ], //definir todos los componentes a usarse
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] //componente principal
})
export class AppModule { }
//@algo decorator
