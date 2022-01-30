import { Component, OnInit } from '@angular/core';

interface transparencia {
  titulo   : String;
  id       : String;
  contenido: String;
}

@Component({
  selector: 'app-articulo-ocho',
  templateUrl: './articulo-ocho.component.html',
  styleUrls: ['./articulo-ocho.component.css']
})
export class ArticuloOchoComponent implements OnInit {

  datosTransparencia: transparencia[] = [
    {
      titulo   : 'I. La necesaria para el ejercicio del derecho a la información pública, que comprende:',
      id       : 'articuloOchoFraccionUno',
      contenido: '<strong>This is the second items accordion body.</strong>' 
    },
    {
      titulo   : 'II. La información sobre el marco jurídico aplicable al y por el sujeto obligado, que comprende:',
      id       : 'articuloOchoFraccionDos',
      contenido: '<strong>This is the second items accordion body.</strong>' 
    },
    {
      titulo   : 'III. La información sobre la planeación del desarrollo, aplicable al y por el sujeto obligado, que comprende:',
      id       : 'articuloOchoFraccionTres',
      contenido: '<strong>This is the second items accordion body.</strong>' 
    },
    {
      titulo   : 'IV. La información sobre la planeación estratégica gubernamental aplicable al y por el sujeto obligado, que comprende:',
      id       : 'articuloOchoFraccionCuatro',
      contenido: '<strong>This is the second items accordion body.</strong>' 
    },
    {
      titulo   : 'V. La información financiera, patrimonial y administrativa, que comprende:',
      id       : 'articuloOchoFraccionCinco',
      contenido: '<strong>This is the second items accordion body.</strong>' 
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
