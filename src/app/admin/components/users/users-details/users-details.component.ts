import { AuthService } from './../../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  usersRes: any;
  admins: any;
  users: any;
  filterValue: string;
  showPayInput = false;
  userPayment = 0;
  constructor(
    private authService: AuthService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(filterValue: string = '') {
    this.authService.getUsers({ filter: filterValue }).subscribe(usersRes => {
      this.usersRes = usersRes;
      this.admins = this.usersRes.users.filter((user: any) => user.isAdmin);
      this.users = this.usersRes.users.filter((user: any) => !user.isAdmin);
    })
  }
  onFilter(e: any) {
    // this.currentPage = 1;
    this.filterValue = e;
    this.getUsers(e);
  }

  // pay(user) {

  // }
  // togglePayInput() {
  //   this.showPayInput = !this.showPayInput;
  // }
  openPayModal(content: any) {
    this.modalService.open(content, { size: 'sm' }).result.then((result) => {
      if (result) {
        if (!result.wallet) {
          result.wallet = 0;
        }
        result.wallet += this.userPayment;
        this.authService.updateUser(result._id, result).subscribe((updatedUser) => {
          this.userPayment = 0;
        });
      }
    });
  }

  removeFromAdmin(content: any) {
    this.modalService.open(content, { size: 'sm' }).result.then((user) => {
      if (user) {
        user.isAdmin = false;
        this.authService.updateUser(user._id, user).subscribe(() => {
          this.getUsers();
        });
      }
    });
  }
  addToAdmin(content: any) {
    this.modalService.open(content, { size: 'sm' }).result.then((user) => {
      if (user) {
        user.isAdmin = true;
        this.authService.updateUser(user._id, user).subscribe(() => {
          this.getUsers();
        });
      }
    });
  }
}
