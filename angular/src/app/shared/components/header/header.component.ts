import { AuthService } from './../../services/auth.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  // userSub: Subscription;
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    //   this.userSub = this.authService.userObs.subscribe(user => {
    //   console.log(this.isAuthenticated);
    //   console.log('my user', user);
    //   // The next 2 lines are the same
    //   this.isAuthenticated = !user? false : true;
    //   // this.isAuthenticated = !!user;
    // });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  navigate(url: string): void {
    this.router.navigate([url]);
  }
  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    // this.userSub.unsubscribe();
    this.authListenerSubs.unsubscribe();
  }

}
