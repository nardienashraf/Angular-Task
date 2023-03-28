import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeAdsService {
  private adsList:string[];

  constructor() {
    this.adsList= [
      "Flash Sale",
      "End of Sale Black Friday",
      "Special sale up to 60%",
      "Save 25% Today",
      "Mother's Day Sale", 
      "Back to School Sale"
    ]
   }

   getAds(intervalInSeconds:number): Observable<string>{
    return new Observable<string>((observer)=>{
      let counter=0;

      //setInterval
      let adsTimer= setInterval(()=>{
        if(counter == this.adsList.length){
          observer.complete();
        }
        observer.next(this.adsList[counter]);
        counter++;
      },intervalInSeconds*1000)

      //clearInterval => (error, complete, unsubscribe);
      return {
        unsubscribe() {
          clearInterval(adsTimer);
        },
      }
    });
   }
}
