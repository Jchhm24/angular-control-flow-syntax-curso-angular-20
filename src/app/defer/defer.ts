import { Component } from '@angular/core';

@Component({
  selector: 'app-defer',
  imports: [],
  templateUrl: './defer.html',
  styleUrl: './defer.scss'
})
export class DeferComponent {
  // permite cargar contenido de forma diferida seguna condición,
  // mejora el rendimiento, aplica lazy loading ya que retraza la carga de partes NO criticas de la aplicación

  isImgVisible = false;

  showImage() {
    this.isImgVisible = true;
  }

}
