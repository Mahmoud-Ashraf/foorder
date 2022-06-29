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
  userIsAuthenticated = false;
  // private authListenerSubs: Subscription;
  // private userListnerSub: Subscription;
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
    if (!registerForm.valid) {
      this.authService.setAuthErrMsg('Please Enter Valid Data');
    } else {
      this.authService.register(registerForm.value);
      this.errorMessage = this.authService.getErrorMsg();
      this.authService.getAuthErrorMsgListner().subscribe((msg: string) => {
        this.errorMessage = msg;
      });
    }
  }

}
