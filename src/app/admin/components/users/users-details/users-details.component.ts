import { Subscription } from 'rxjs';
import { AuthService } from './../../../../shared/services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit, OnDestroy {
  usersRes: any;
  admins: any;
  users: any;
  filterValue: string;
  showPayInput = false;
  userPayment = 0;
  getUsersSub: Subscription
  updateUserWalletSub: Subscription
  removeFromAdminSub: Subscription
  addToAdminSub: Subscription
  constructor(
    private authService: AuthService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(filterValue: string = '') {
    this.getUsersSub = this.authService.getUsers({ filter: filterValue }).subscribe(usersRes => {
      this.usersRes = usersRes;
      this.admins = this.usersRes.users.filter((user: any) => user.isAdmin);
      this.users = this.usersRes.users.filter((user: any) => !user.isAdmin);
    })
  }
  onFilter(e: any) {
    this.filterValue = e;
    this.getUsers(e);
  }

  openPayModal(content: any) {
    this.modalService.open(content, { size: 'sm' }).result.then((result) => {
      if (result) {
        if (!result.wallet) {
          result.wallet = 0;
        }
        result.wallet += this.userPayment;
        this.updateUserWalletSub = this.authService.updateUser(result._id, result).subscribe((updatedUser) => {
          this.userPayment = 0;
        });
      }
    });
  }

  removeFromAdmin(content: any) {
    this.modalService.open(content, { size: 'sm' }).result.then((user) => {
      if (user) {
        user.isAdmin = false;
        this.removeFromAdminSub = this.authService.updateUser(user._id, user).subscribe(() => {
          this.getUsers();
        });
      }
    });
  }
  addToAdmin(content: any) {
    this.modalService.open(content, { size: 'sm' }).result.then((user) => {
      if (user) {
        user.isAdmin = true;
        this.addToAdminSub = this.authService.updateUser(user._id, user).subscribe(() => {
          this.getUsers();
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.updateUserWalletSub?.unsubscribe();
    this.getUsersSub?.unsubscribe();
    this.removeFromAdminSub?.unsubscribe();
    this.addToAdminSub?.unsubscribe();
  }
}
