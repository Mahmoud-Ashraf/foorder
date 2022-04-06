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
    private homeService: HomeService
  ) {
  }

  ngOnInit(): void {
    // this.showPollSub = this.homeService.showPoll.subscribe(showPoll => {
    //   console.log('show Poll: ', showPoll);
    //   this.showPoll = showPoll;
    // })
    const jsonPollEndTime = localStorage.getItem('pollEndTime');
    const jsonOrderEndTime = localStorage.getItem('orderEndTime');
    if (jsonPollEndTime) {
      const pollEndTime = JSON.parse(jsonPollEndTime);
      const timeRemainingToPoll = this.homeService.calcDateDiff(pollEndTime);
      console.log(timeRemainingToPoll);
      if (timeRemainingToPoll.secondsToDday == '00' && timeRemainingToPoll.minutesToDday == '00' && timeRemainingToPoll.hoursToDday == '00' ) {
        this.showPoll = false;
      }
      else {
        this.showPoll = true;
      }
    }
    if (jsonOrderEndTime) {
      const orderEndTime = JSON.parse(jsonOrderEndTime);
      const timeRemainingToOrder = this.homeService.calcDateDiff(orderEndTime);
      console.log(timeRemainingToOrder);
      if (timeRemainingToOrder.secondsToDday == '00' && timeRemainingToOrder.minutesToDday == '00' && timeRemainingToOrder.hoursToDday == '00' ) {
        this.showOrder = false;
      }
      else {
        this.showOrder = true;
      }
    }
  }
  ngOnDestroy(): void {
    // this.showPollSub.unsubscribe();
  }
}
