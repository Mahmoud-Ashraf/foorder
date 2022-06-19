import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HelperService } from 'src/app/shared/services/helper.service';
import { HomeService } from '../../services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  pollEndTime: string = '00:00:00';
  orderEndTime: string = '00:00:00';
  showPoll: boolean = false;
  showOrder: boolean = false;
  pollCountDownTimer: any;
  orderCountDownTimer: any;
  getConfigSub: Subscription
  constructor(
    private helperService: HelperService,
    private homeService: HomeService,

  ) {
  }

  ngOnInit(): void {
    this.getConfig();
  }

  getConfig() {
    this.getConfigSub = this.helperService.getConfig().subscribe((config: any) => {
      this.pollEndTime = config.config[0].voteEndTime;
      this.orderEndTime = config.config[0].orderEndTime;
      this.showHideDependOnCountDown();
    })
  }

  showHideDependOnCountDown() {
    this.showPoll = this.homeService.calcDateDiffInMs(this.pollEndTime) > 0;
    this.showOrder = this.homeService.calcDateDiffInMs(this.orderEndTime) > 0;
    this.pollCountDownTimer = setTimeout(() => {
      this.showPoll = false;
    }, this.homeService.calcDateDiffInMs(this.pollEndTime));
    this.orderCountDownTimer = setTimeout(() => {
      this.showOrder = false;
    }, this.homeService.calcDateDiffInMs(this.orderEndTime));
  }

  ngOnDestroy(): void {
    if (this.pollCountDownTimer) {
      clearTimeout(this.pollCountDownTimer);
    }
    if (this.orderCountDownTimer) {
      clearTimeout(this.orderCountDownTimer);
    }
    this.getConfigSub?.unsubscribe();
  }

}
