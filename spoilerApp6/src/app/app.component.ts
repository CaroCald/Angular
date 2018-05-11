import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //etiqueta
  templateUrl: './app.component.html', //structura
  styleUrls: ['./app.component.css'] //
})
export class AppComponent {
  nombre= 'Carolina';
  apellido='Calderon';
  edad=23;
  sueldo=477747.33;
  fechaNacimiento= new Date('1994-02-25');
  nombreBoton='Cambiar Color';
  nombreClase ='sa-titulo';
  clase="";
  cambiarClaseDeTitulo(){
    const nombreClaseEsTitulo=this.nombreClase==='sa-titulo'; //nueva variable con la que representar el if
    if(nombreClaseEsTitulo){
      this.nombreClase='sa-subtitulo';
    }else{
      this.nombreClase='sa-titulo;'
    }
  }
  aplicarClase(valorInput: string){
    this.nombreClase=valorInput;
  }

}
