import { AuthService } from './../../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  usersRes: any;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.authService.getUsers().subscribe(usersRes => {
      this.usersRes = usersRes;
    })
  }

}
