import { AuthService } from './../../../shared/services/auth.service';
import { Subscription } from 'rxjs';
import { ResturantsService } from './../../../shared/services/resturants.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Resturant } from 'src/app/models/resturant';

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
  resetResturantsVoteSub: Subscription;
  currentUser: any;
  @Input() pollEndTime: string;
  pollMsg: string;
  pollMsgType: string;
  constructor(
    private resturantsService: ResturantsService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.getResturants();
    this.getUser();
  }

  

  

  selectResturant(resturant: Resturant): void {
    if (!this.currentUser?.voted) {
      this.selectedResturant = resturant;
    }
  }

  vote(): void {
    if (this.selectedResturant && this.currentUser && !this.currentUser?.voted) {
      this.selectedResturant.vote += 1;
      this.selectedResturant.lastVotedAt = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
      this.currentUser.voted = true;
      this.currentUser.lastVoteDate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
      this.updateResturant(this.selectedResturant._id, this.selectedResturant);
      this.updateUser(this.currentUser._id, this.currentUser);
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
      this.resetResturantsVoteSub = this.resturantsService.resetResturantsVote().subscribe(resturants => {
        this.resturants.forEach(resturant => {
          resturant.vote = 0;
        });
      });
    }
  }

  private updateResturant(resturantId: string | undefined, resturant: Resturant) {
    this.updateResturantSub = this.resturantsService.updateResturant(resturantId, resturant).subscribe(resturant => {
      this.setPollMsg('Your Vote Submitted Successfully', 'SUCCESS');
    }, err => {
      this.setPollMsg('Somthing Went Wrong With Your Vote', 'ERROR');
    })
  }
  private updateUser(userId: string | undefined, user: any) {
    this.updateUserSub = this.authService.updateUser(userId, user).subscribe(user => {
      this.setPollMsg('Your Vote Submitted Successfully', 'SUCCESS');
    }, err => {
      this.setPollMsg('Somthing Went Wrong With Your Vote', 'ERROR');
    })
  }

  setPollMsg(msg: string, type: string) {
    this.pollMsg = msg;
    this.pollMsgType = type;
    setTimeout(() => {
      this.pollMsg = '';
      this.pollMsgType = ''
    }, 4000);
  }

  getUser() {
    this.currentUser = this.authService.getLoggedUser();
    this.checkUserVote();
    this.getUserSub = this.authService.getAuthUserListner().subscribe((user: any) => {
      this.currentUser = user;
      this.checkUserVote();
    })
  }

  checkUserVote() {
    if (this.currentUser) {
      this.currentUser.voted = this.currentUser?.lastVoteDate == new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
    }
  }

  ngOnDestroy(): void {
    this.getUserSub?.unsubscribe();
    this.updateUserSub?.unsubscribe();
    this.resturantsSub?.unsubscribe();
    this.updateResturantSub?.unsubscribe();
    this.resetResturantsVoteSub?.unsubscribe();
  }

}
