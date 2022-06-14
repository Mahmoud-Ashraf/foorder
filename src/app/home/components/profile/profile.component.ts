import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  orders: any;
  private userListnerSub: Subscription;
  loggedUser: any;
  constructor(
    private orderService: OrderService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loggedUser = this.authService.getLoggedUser();
    this.userListnerSub = this.authService
      .getAuthUserListner()
      .subscribe((user: any) => {
        this.loggedUser = user;
      })
    this.getuserOrders();
    // this.authService.getAuthUserListner().subscribe((user: any) => {
    //   this.getuserOrders()
    // })
    this.getTodayResturantId();
  }

  getuserOrders() {
    const loggedUserId = localStorage.getItem('loggedUserId');
    if (loggedUserId) {
      this.orderService.getOrdersPerUser(loggedUserId).subscribe(userOrders => {
        console.log(userOrders);
        this.orders = userOrders;
        // const uniqeOrder = new Set(this.orders.items);
        // console.log(this.orders);
      });
    }
  }
  getTodayResturantId() {
    return localStorage.getItem('toDayResturantId');
  }



}
