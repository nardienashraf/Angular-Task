import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeAdsService } from 'src/app/services/home-ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  displaydata: string[] = [];
  subscrption !: Subscription;
  constructor(private adsService: HomeAdsService) {
  }

  ngOnInit(): void {
    const observer = {
      next: (data: string) => {
        console.log(data);
        this.displaydata.push(data);
      },
      complete: () => {
        console.log("Ads Finished");
        console.log(this.displaydata);
      }
    }
    this.subscrption = this.adsService.getAds(2).subscribe(observer);
  }

  ngOnDestroy(): void {
    this.subscrption.unsubscribe()
  }
}
