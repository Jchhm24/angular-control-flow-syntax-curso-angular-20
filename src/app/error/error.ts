import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child-component/child-component';

@Component({
  selector: 'app-error',
  imports: [ChildComponent],
  templateUrl: './error.html',
  styleUrl: './error.scss'
})
export class ErrorComponent implements OnInit {

  isContentReady = false;

  ngOnInit(){
    setTimeout(() => {
      this.isContentReady = true;
    }, 5000);
  }

  onClick = () => {
    alert('I work include when the component has a error')
  }
}


