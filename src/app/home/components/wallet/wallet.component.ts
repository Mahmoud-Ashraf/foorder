import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit, OnDestroy {
  private userListnerSub: Subscription;
  loggedUser: any;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.loggedUser = this.authService.getLoggedUser();
    this.userListnerSub = this.authService
    .getAuthUserListner()
    .subscribe((user: any) => {
      this.loggedUser = user;
      // console.log('loggedUser: ', this.loggedUser);
    })
  }

  ngOnDestroy(): void {
    this.userListnerSub?.unsubscribe();
  }

}
