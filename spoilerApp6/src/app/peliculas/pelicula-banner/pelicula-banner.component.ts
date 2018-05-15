import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-banner',
  templateUrl: './pelicula-banner.component.html',
  styleUrls: ['./pelicula-banner.component.css']
})
export class PeliculaBannerComponent implements OnInit {
  urlImagen="https://wallpapersite.com/images/pages/pic_w/12403.jpg";
  descripcionPelicula="Alicia Vinkander";
  nombrePelicula="Tom Raider";
  esEstreno=false;
  textoEstreno:string;
  claseEstreno:string;

  constructor() { }

  ngOnInit() {
    //evento que se ejecuta cuando esta listo (inicia)
    if(this.esEstreno){
      this.textoEstreno='Estreno';
      this.claseEstreno='sa-color-estado-rosado';
    }else{
      this.textoEstreno='Proximamente';
      this.claseEstreno='sa-color-estado-amarillo';
    }
  }

}
