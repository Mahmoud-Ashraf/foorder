import { AuthService } from './../../../shared/services/auth.service';
import { Subscription } from 'rxjs';
import { ResturantsService } from './../../../shared/services/resturants.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Resturant } from 'src/app/models/resturant';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit, OnDestroy {
  resturants: Resturant[];
  selectedResturant: any;
  resturantsSub: Subscription;
  updateResturantSub: Subscription;
  updateUserSub: Subscription;
  getUserSub: Subscription;
  currentUser: any;
  pollEndTime: number[] = [23, 0, 0];
  showPoll: boolean = false;
  countDownTimer: any;
  constructor(
    private loader: LoaderService,
    private flashMessage: FlashMessagesService,
    private resturantsService: ResturantsService,
    private authService: AuthService,
    private homeService: HomeService
  ) {
  }

  ngOnInit(): void {
    this.showHideDependOnCountDown();
    this.getResturants();
    this.getUser();
  }

  selectResturant(resturant: Resturant): void {
    if (!this.currentUser?.voted) {
      this.selectedResturant = resturant;
      // console.log(this.selectedResturant);
    }
  }

  vote(): void {
    // console.log('selected before update', this.selectedResturant);
    if (this.selectedResturant && this.currentUser && !this.currentUser.voted) {
      this.selectedResturant.vote += 1;
      this.currentUser.voted = true;
      // console.log('selected after update', this.selectedResturant, this.currentUser);
      this.updateResturant(this.selectedResturant._id, this.selectedResturant);
      this.updateUser(this.currentUser._id, this.currentUser);
      this.getResturants();
      this.authService.autoAuthUser();
      this.selectedResturant = undefined;
    }
  }

  private getResturants() {
    this.resturantsSub = this.resturantsService.getResturants().subscribe((resturants: any) => {
      this.resturants = resturants.resturants;
      // console.log('get res', this.resturants);
    })
  }

  private updateResturant(resturantId: string | undefined, resturant: Resturant) {
    this.updateResturantSub = this.resturantsService.updateResturant(resturantId, resturant).subscribe(resturant => {
      // console.log('updated res', resturant);
      // this.getResturants();
    })
  }
  private updateUser(userId: string | undefined, user: Resturant) {
    this.updateUserSub = this.authService.updateUser(userId, user).subscribe(user => {
      // console.log('updated user', user, this.currentUser);
      this.getUser();
    })
  }

  private showHideDependOnCountDown() {
    const timeTillOrderEnd = this.homeService.calcDateDiffInMs(this.pollEndTime);
    if (timeTillOrderEnd > 0) {
      this.showPoll = true;
      this.countDownTimer = setTimeout(() => {
        this.showPoll = false;
      }, timeTillOrderEnd);
    }
  }

  getUser() {
    this.getUserSub = this.authService.getAuthUserListner().subscribe(user => {
      this.currentUser = user;
      // console.log('get current User', this.currentUser);
    })
  }

  ngOnDestroy(): void {
    this.getUserSub?.unsubscribe();
    this.updateUserSub?.unsubscribe();
    this.resturantsSub?.unsubscribe();
    this.updateResturantSub?.unsubscribe();
    if (this.countDownTimer) {
      clearTimeout(this.countDownTimer);
    }
  }

}
