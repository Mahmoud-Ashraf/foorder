import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User;
  // password: string;
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  private userListnerSub: Subscription;
  errorMessage: string;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.authService.getIsAuth()) {
      this.router.navigate(['/home']);
    }
  }

  register(registerForm: NgForm) {
    console.log(registerForm.value);
    this.authService.register(registerForm.value).subscribe(user => {
      console.log(user);
    })
  }

}
