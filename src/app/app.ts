import { Component } from '@angular/core';
import {DeferComponent } from './defer/defer';
import { Placeholder } from './placeholder/placeholder';
import { Loading } from './loading/loading';
import { ErrorComponent } from './error/error';

@Component({
  selector: 'app-root',
  imports: [DeferComponent, Placeholder, Loading,ErrorComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-control-flow-syntax';
}
