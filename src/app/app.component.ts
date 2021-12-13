import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  firstNumber: number;
  secondNumber: number;
  result:number;

  addNumber() {
    this.result = this.firstNumber + this.secondNumber;
  }
}
