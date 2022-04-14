import { ResturantsService } from 'src/app/shared/services/resturants.service';
import { Subscription } from 'rxjs';
import { HomeService } from './services/home.service';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // showPollSub: Subscription;
  // showPoll: boolean = false;
  showOrder = true;
  showPoll = true;
  constructor(
    private homeService: HomeService,
    // private resturantsService: ResturantsService
  ) {
  }

  ngOnInit(): void {
    // this.showPollSub = this.homeService.showPoll.subscribe(showPoll => {
    //   console.log('show Poll: ', showPoll);
    //   this.showPoll = showPoll;
    // })
    this.showOrder = this.calcDiff('orderEndTime');
    this.showPoll = this.calcDiff('pollEndTime');
  }
  ngOnDestroy(): void {
    // this.showPollSub.unsubscribe();
  }

  calcDiff(localName: string) {
    const jsonEndTime = localStorage.getItem(localName);
    console.log(jsonEndTime);
    if (jsonEndTime) {
      const endTime = JSON.parse(jsonEndTime);
      const timeRemaining = this.homeService.calcDateDiff(endTime);
      if (timeRemaining.secondsToDday == '00' && timeRemaining.minutesToDday == '00' && timeRemaining.hoursToDday == '00') {
        return false;
      }
      else {
        return true;
      }
    }
    return true;
  }

  // checkforPollReset() {
  //   this.resturantsService.getResturants().subscribe((resturantsRes: any) => {
  //     resturantsRes.resturants.forEach(resturant => {
        
  //     });
  //   })
  // }
}
