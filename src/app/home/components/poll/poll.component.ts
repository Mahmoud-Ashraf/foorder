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
      // this.getResturants();
      // this.authService.autoAuthUser();
      this.selectedResturant = undefined;
    }
  }

  private getResturants() {
    this.resturantsSub = this.resturantsService.getResturants().subscribe((resturants: any) => {
      console.log('Resturants object', resturants);
      this.resturants = resturants.resturants;
      this.resetResturantsVote();
    })
  }

  resetResturantsVote() {
    const notReset = this.resturants.some(resturant => {
      console.log('resturant ', resturant,'lastVotedAt is today?: ', new Date().getDate() === new Date(resturant.lastVotedAt).getDate())
      return new Date().getDate() === new Date(resturant.lastVotedAt).getDate();
    });
    console.log('reset status', notReset);
    if (!notReset) {
      this.resetResturantsVoteSub = this.resturantsService.resetResturantsVote().subscribe(resturants => {
        this.resturants.forEach(resturant => {
          resturant.vote = 0;
        });
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
    this.resetResturantsVoteSub?.unsubscribe();
  }

}
