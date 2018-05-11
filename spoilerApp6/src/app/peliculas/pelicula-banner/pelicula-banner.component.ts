import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-banner',
  templateUrl: './pelicula-banner.component.html',
  styleUrls: ['./pelicula-banner.component.css']
})
export class PeliculaBannerComponent implements OnInit {
  urlImagen="https://i.blogs.es/2aeb3f/tr/450_1000.jpg";
  descripcionPelicula="Alicia Vinkander";
  nombrePelicula="Tom Raider";
  esEstreno=true;
  textoEstreno:string;
  claseEstreno:string;

  constructor() { }

  ngOnInit() {
    //vento que se ejecuta cuando esta listo
    if(this.esEstreno){
      this.textoEstreno='Estreno';
      this.claseEstreno='sa-color-estado-rosado';
    }else{
      this.textoEstreno='Proximamente';
      this.claseEstreno='sa-color-estado-amarillo';
    }
  }

}
