import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { ResturantsService } from 'src/app/shared/services/resturants.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  email: string;
  password: string;
  errorMessage: string;
  disableSignIn = false;
  constructor(
    private router: Router,
    private loader: LoaderService,
    private flashMessage: FlashMessagesService,
    private resturantsService: ResturantsService
  ) { }

  ngOnInit(): void {
    // this.resturantsService.getResturants();
  }

  signIn(): void {
  }

}
