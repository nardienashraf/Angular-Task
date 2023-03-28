import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(creditCard:string):string {
    if(creditCard.length == 16){
      const firstDigits= creditCard.substring(0,4);
      const secondDigits= creditCard.substring(4,8);
      const thirdDigits= creditCard.substring(8,12);
      const fourthDigits= creditCard.substring(12,16);
      return `${firstDigits} - ${secondDigits} - ${thirdDigits} - ${fourthDigits}`
    }
    return " Please enter a valid credit card number";
  }
}
