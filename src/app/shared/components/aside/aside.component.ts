import { HelperService } from 'src/app/shared/services/helper.service';
import { User } from 'src/app/models/User';
import { AuthService } from '../../services/auth.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NavigationStart, Router, Event as NavigationEvent, NavigationEnd } from '@angular/router';
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
  adminOpen: boolean = false;
  constructor(
    private router: Router,
    public authService: AuthService,
    private helperService: HelperService
  ) { }

  ngOnchange(): void {
    
  }
  ngOnInit(): void {
    this.adminOpen = this.router.url.includes('admin');
    this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationEnd) {
        this.adminOpen = event.url.includes('admin');
        // if(event.url.includes('admin')) {
        //   this.adminOpen = true;
        // } else {
        //   this.adminOpen = false;
        // }
      }
      // console.log(this.adminOpen);
    })
    console.log('adminOpen', this.adminOpen);
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
      })
  }

  navigate(url: string): void {
    this.router.navigate([url]);
  }
  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs?.unsubscribe();
    this.userListnerSub?.unsubscribe();
  }
  generateUserAvatar(userName: string) {
    return this.helperService.generateUserAvatar(userName);
  }

}
