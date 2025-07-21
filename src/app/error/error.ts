import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.html',
  styleUrl: './error.scss'
})
export class ErrorComponent implements OnInit {

  //! SOLO FUNCIONA CON @defer Y SERVER SIDE RENDERING

  isContentReady = false;

  ngOnInit(){
    setTimeout(() => {
      this.isContentReady = true;

      setTimeout(() => {
        throw new Error('Simulated loading error');
      }, 100);
    }, 300);
  }

  loadFailingComponent(){
    return Promise.reject(new Error('Failed to load component'));
  }
}

