import {Component} from '@angular/core';

@Component({
  selector: 'app-root', // Selector o etiqueta
  templateUrl: './app.component.html', // Estructura
  styleUrls: ['./app.component.css'] // Estilos
})

export class AppComponent {

  mostrarHola = true;
  arregloNumeros = [1, 2, 3, 4, 5, 6];

  arregloPeliculas = [
    {
      nombre: 'Tomb Raider',
      descripcion: 'Alicia Vikander, Walton Goggins',
      esEstreno: false,
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_FOh_xn19xgXf_Uq5OK3WWzAmoVoZLHCO2vjFd4LKaxijU59eg'
    },
    {
      nombre: 'Ready Player One',
      descripcion: 'Tye Sheridan, Olivia Cooke',
      esEstreno: false,
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFQprASMSiRnRHYgQl5sHoGr8GiMI9IB2XVIQP_tmD61KFgUY'
    },
  ];


  alertar(evento) {
    console.log('Evento: ', evento); // true
    alert('DIO CLICK EN ES ESTRENO!!!!!!!!!');
  }


  /*clase1='';
  colorAcutal='';
  cambiarColor(){
    const nombreClase='';
    if(this.clase1){
      this.clase1='sa-clase1';
    }
    else if(this.clase1){
      this.clase1='sa-clase2';
    }
    else if(this.clase1){
      this.clase1='sa-clase3'
    }
  }*/

  /*nombre= 'Carolina';
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
  }*/

}
