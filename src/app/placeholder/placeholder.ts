import { Component } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  imports: [],
  templateUrl: './placeholder.html',
  styleUrl: './placeholder.scss'
})
export class Placeholder {
  isImageVisible = false;

  showImage() {
    setTimeout(() => {
      this.isImageVisible = true;
    }, 4000);
  }

}
