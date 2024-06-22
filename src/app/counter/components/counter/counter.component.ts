import {Component} from "@angular/core";

@Component({
  selector:'app-counter',
  template:`
    <p>{{counter}}</p>
    <button (click)="increase()">+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="decrease(1)">-1</button>
  `
})
export class CounterComponent{
  constructor() {
  }
  counter= 0;
  increase():void{
    this.counter+=1;
  }
  decrease(amount:number):void{
    this.counter-=amount;
  }
  reset():void{
    this.counter=0;
  }
}
