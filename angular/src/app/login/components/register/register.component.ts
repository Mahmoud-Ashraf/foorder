import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User;
  // password: string;
  errorMessage: string;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  register(registerForm: NgForm) {
    console.log(registerForm.value);
    this.authService.register(registerForm.value).subscribe(user => {
      console.log(user);
    })
  }

}
