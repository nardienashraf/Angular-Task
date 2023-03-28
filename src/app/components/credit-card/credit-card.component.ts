import { Component } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent {
  creditCardNumber:any;
  constructor(){
  }
  getCreditCardNumber(creditCard:any){
    this.creditCardNumber= creditCard;
  }
}