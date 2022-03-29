import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { ResturantsService } from 'src/app/shared/services/resturants.service';
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
  loginUser: User = {
    // firstName: '',
    // name: '',
    email: '',
    // companyNeckname: '',
    // phone: '',
    password: ''
  };
  constructor(
    // private router: Router,
    // private loader: LoaderService,
    // private flashMessage: FlashMessagesService,
    // private resturantsService: ResturantsService
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // this.resturantsService.getResturants();
  }

  login(): void {
    this.authService.login(this.loginUser).subscribe((user: any) => {
      console.log(user);
      localStorage.setItem('token', user.token);
    })
  }

}
