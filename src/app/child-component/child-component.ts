import { Component } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  template: `
    <p>This component is loaded successfully!</p>
  `,
  styleUrl: './child-component.scss'
})
export class ChildComponent {
  constructor(){
    throw new Error('This is a simulated error in the child component');
  }
}
