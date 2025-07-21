import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child-component/child-component';

@Component({
  selector: 'app-error',
  imports: [ChildComponent],
  templateUrl: './error.html',
  styleUrl: './error.scss'
})
export class ErrorComponent implements OnInit {


  //! MAYORMENTE ESTO PASA O SE UTILIZA CON EL SERVER SIDE RENDERING
  //? En este caso, el componente hijo tiene un error simulado en su constructor.


  isContentReady = false;

  ngOnInit(){
    setTimeout(() => {
      this.isContentReady = true;

    }, 10000);
  }

  onClick = () => {
    alert('I work include when the component has a error')
  }
}


