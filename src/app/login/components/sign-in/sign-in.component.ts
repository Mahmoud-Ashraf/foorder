import { NgForm } from '@angular/forms';
import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  // email: string;
  // password: string;
  errorMessage: string;
  disableSignIn = false;
  loginUser: User;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // this.resturantsService.getResturants();
    if (this.authService.getIsAuth()) {
      this.router.navigate(['/home']);
    }
  }

  login(loginForm: NgForm): void {
    if (!loginForm.valid) {
      this.authService.setAuthErrMsg('Please Enter Valid Data');
    } else {
      this.authService.login(loginForm.value);
      this.errorMessage = this.authService.getErrorMsg();
      this.authService.getAuthErrorMsgListner().subscribe((msg: string) => {
        this.errorMessage = msg;
      });
    }
  }

}
