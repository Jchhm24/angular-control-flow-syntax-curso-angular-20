import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  imports: [],
  templateUrl: './if.html',
  styleUrl: './if.scss'
})
export class If {
  // Angular es una plataforma de estructura de aplicaciones web
  // brinda funcionalidad a algo que antes no lo tenía


  //TODO: Angular recomienda usar protected en lugar de public para que solo
  // para que las clases hijas puedan acceder a estas propiedades
  // y no se puedan modificar desde fuera de la clase
  //TODO: recomendable para mostrar cosas en pantalla
  protected isVisible = true;

}
