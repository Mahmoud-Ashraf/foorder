import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = {
    // firstName: '',
    name: '',
    email: '',
    // companyNeckname: '',
    // phone: '',
    password: ''
  };
  // password: string;
  errorMessage: string;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.user);
    this.authService.register(this.user).subscribe(user => {
      console.log(user);
    })
  }

}
