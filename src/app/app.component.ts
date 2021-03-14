import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  date: string;
  amount: string;

  onNameChangeHandler(value:string) {
    this.name = value;
  }

  onDateChangeHandler(value:string) {
    this.date = value;
  }

  onAmountChangehandler(value:string) {
    this.amount = value;
  }
}
