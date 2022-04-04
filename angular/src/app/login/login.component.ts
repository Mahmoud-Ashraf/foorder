import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authListenerSubs: Subscription;
  userIsAuthenticated = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.authListenerSubs = this.authService
    //   .getAuthStatusListener()
    //   .subscribe(isAuthenticated => {
    //     if (isAuthenticated || this.authService.getIsAuth()) {
    //       this.router.navigate(['/home']);
    //     }

    //   });
    // console.log('authorized:', this.authService.getIsAuth());
    // if (this.authService.getIsAuth()) {
    //   this.router.navigate(['/home']);
    // }
    // console.log('Mahmoooooooooyud');
  }

}
