import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    oddNumbers: number[] = []
    evenNumbers: number[] = []

  onAddNumber (event) {
    const number: number = Math.floor( event.value )
    if(number % 2 === 0){
       this.evenNumbers.push(number)
    }
    else {
      this.oddNumbers.push(number)
    }
  }
}
