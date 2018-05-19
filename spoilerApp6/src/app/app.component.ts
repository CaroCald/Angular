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
      urlImagen: 'https://cdn2.skgcl.com/wp-content/uploads/2018/03/tomb-raider-2560x1440-alicia-vikander-lara-croft-2018-4k-11778.jpg'
    },
    {
      nombre: 'Ready Player One',
      descripcion: 'Tye Sheridan, Olivia Cooke',
      esEstreno: false,
      urlImagen: 'https://hipertextual.com/files/2018/03/ready_player_one_steven_spielberg-1000x667.jpg'
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
