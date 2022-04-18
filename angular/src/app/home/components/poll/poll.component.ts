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
  resturants: any[];
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
    if (this.selectedResturant && this.currentUser && !this.currentUser?.voted) {
      this.selectedResturant.vote += 1;
      this.selectedResturant.lastVotedAt = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
      this.currentUser.voted = true;
      this.currentUser.lastVoteDate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
      // console.log('selected after update', this.selectedResturant, this.currentUser);
      this.updateResturant(this.selectedResturant._id, this.selectedResturant);
      this.updateUser(this.currentUser._id, this.currentUser);
      this.getResturants();
      // this.authService.autoAuthUser();
      this.selectedResturant = undefined;
    }
  }

  private getResturants() {
    this.resturantsSub = this.resturantsService.getResturants().subscribe((resturants: any) => {
      this.resturants = resturants.resturants;
      this.resetResturantsVote();
    })
  }

  resetResturantsVote() {
    const notReset = this.resturants.some(resturant => {
      return new Date().getDate() === new Date(resturant.lastVotedAt).getDate();
    });
    if (!notReset) {
      this.resturantsService.resetResturantsVote().subscribe(resturants => {
        console.log(resturants);
      });
    }
  }

  private updateResturant(resturantId: string | undefined, resturant: Resturant) {
    this.updateResturantSub = this.resturantsService.updateResturant(resturantId, resturant).subscribe(resturant => {
      // console.log('updated res', resturant);
      // this.getResturants();
    })
  }
  private updateUser(userId: string | undefined, user: any) {
    this.updateUserSub = this.authService.updateUser(userId, user).subscribe(user => {
      console.log('updated user', user, this.currentUser);
      // this.getUser();
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
    this.currentUser = this.authService.getLoggedUser();
    this.checkUserVote();
    this.getUserSub = this.authService.getAuthUserListner().subscribe((user: any) => {
      this.currentUser = user;
      this.checkUserVote();
      // this.currentUser.voted = user.lastVoteDate == new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
    })
  }

  checkUserVote() {
    if (this.currentUser) {
      console.log('current before edit', this.currentUser);
      this.currentUser.voted = this.currentUser?.lastVoteDate == new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
      console.log('current after edit', this.currentUser);
    }
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
