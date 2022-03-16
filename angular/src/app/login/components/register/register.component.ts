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
    firstName: '',
    lastName: '',
    email: '',
    companyNeckname: '',
    phone: ''
  };
  password: string;
  errorMessage: string;
  constructor(
    private router: Router,
    private loader: LoaderService
  ) { }

  ngOnInit(): void {
  }

}
