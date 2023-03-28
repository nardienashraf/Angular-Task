import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalID'
})
export class NationalIDPipe implements PipeTransform {

  transform(nid: string, datePart: string): string {
    if (nid != "" && nid.length == 14) {
      const year = nid.substring(1, 3);
      const month = nid.substring(3, 5);
      const day = nid.substring(5, 7);
      const firstDigit = Number(nid.substring(0, 1));
      if (firstDigit == 2) {
        switch (datePart) {
          case 'YY':
            return `Year: 19${year}`
          case 'MM':
            return `Month: ${month}`
          case 'DD':
            return `Day: ${day}`
          default:
            return `BirthDate: ${day}/${month}/19${year}`
        }
      }
    } 
    return `Please Enter a Valid NationalID`
  }
}
