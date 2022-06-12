import { HelperService } from 'src/app/shared/services/helper.service';
import { User } from 'src/app/models/User';
import { AuthService } from '../../services/auth.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  private userListnerSub: Subscription;
  loggedUser: any;
  constructor(
    private router: Router,
    public authService: AuthService,
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.loggedUser = this.authService.getLoggedUser();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
    this.userListnerSub = this.authService
      .getAuthUserListner()
      .subscribe((user: any) => {
        this.loggedUser = user;
        // console.log('loggedUser: ', this.loggedUser);
      })
  }

  navigate(url: string): void {
    this.router.navigate([url]);
  }
  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
    this.userListnerSub.unsubscribe();
  }
  generateUserAvatar(userName: string) {
    return this.helperService.generateUserAvatar(userName);
  }

}
