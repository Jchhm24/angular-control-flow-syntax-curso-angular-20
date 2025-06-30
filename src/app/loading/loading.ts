import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.html',
  styleUrl: './loading.scss'
})
export class Loading implements OnInit {
  isContentReady = false;

  // aqui usamos el ngOnInit por el ciclo de vida del componente
  // para simular que el contenido tarda en cargar
  // y que se muestra el loading
  ngOnInit(): void {
    setTimeout(() => {
      this.isContentReady = true;
    }, 4000)
  }
}
