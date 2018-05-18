import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pelicula-banner',
  templateUrl: './pelicula-banner.component.html',
  styleUrls: ['./pelicula-banner.component.css']
})
export class PeliculaBannerComponent implements OnInit {

  @Input() urlImagen:string;
  @Input() descripcionImagen:string;
  @Input() descripcionPelicula:string;
  @Input() nombrePelicula:string;
  @Input()esEstreno:boolean;
  textoEstreno:string;
  claseEstreno:string;

  constructor() {
    //sus variables van a ser underfined
  }
  ngOnInit() {
    console.log("Inicio y seteo color", this.nombrePelicula);
    this.setearColorYClase();
  }

  ngOnChanges(propiedadesActualizadas) {
    console.log('Algo', propiedadesActualizadas);
    if (propiedadesActualizadas.esEstreno) {
      this.setearColorYClase();
    }
  }

  setearColorYClase() {
    if (this.esEstreno) {
      this.textoEstreno = 'Estreno';
      this.claseEstreno = 'sa-color-estado-rosado';
    } else {
      this.textoEstreno = 'Proximamente';
      this.claseEstreno = 'sa-color-estado-amarillo';
    }
  }

}
