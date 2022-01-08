import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-ng-app';
  textContent: string | undefined;
  numberContent: number = 0;
  isEven: boolean = true;
  minMax: number | undefined
  numbers: Array<number> = [1,2,3,4,5]
  findifEven () {
    this.isEven = this.numberContent % 2 == 0;
  };
  findMax(){
    this.minMax = Math.max.apply(null, this.numbers)
  }
  findMin(){
    this.minMax = Math.min.apply(null, this.numbers)
  }
}
