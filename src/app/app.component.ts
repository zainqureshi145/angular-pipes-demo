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
  miles: string;
  car = {
    make: 'Toyota',
    model: 'Camry',
    year: '2010'
  }

  onNameChangeHandler(value:string) {
    this.name = value;
  }

  onDateChangeHandler(value:string) {
    this.date = value;
  }

  onAmountChangeHandler(value:string) {
    this.amount = value;
  }

  onMilesChangeHandler(value: string) {
    this.miles = value;
  }
}
