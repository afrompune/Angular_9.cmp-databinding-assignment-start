import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];

  counterChanged(n: number) {
    //console.log("Number " + n);

    if (n == 0) {
      this.evenNumbers = this.evenNumbers.slice(0, 0);
      this.oddNumbers = this.oddNumbers.slice(0, 0);
    }
    else {
      if ((n % 2) == 0)
        this.evenNumbers.push(n);
      else
        this.oddNumbers.push(n);
    }
  }
}
