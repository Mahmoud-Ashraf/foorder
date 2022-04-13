import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  orders: any;
  constructor(
    private orderService: OrderService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getuserOrders();
    // this.authService.getAuthUserListner().subscribe((user: any) => {
    //   this.getuserOrders()
    // })
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



}
