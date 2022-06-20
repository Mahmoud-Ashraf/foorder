import { Router } from '@angular/router';
import { ResturantsService } from './../../../shared/services/resturants.service';
import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  orders: any;
  private userListnerSub: Subscription;
  private getuserOrdersSub: Subscription;
  private getTodayResturantSub: Subscription;
  loggedUser: any;
  todayResturant: any;
  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private resturantsService: ResturantsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loggedUser = this.authService.getLoggedUser();
    this.userListnerSub = this.authService
      .getAuthUserListner()
      .subscribe((user: any) => {
        this.loggedUser = user;
      })
    this.getuserOrders();
    this.getTodayResturantId();
  }

  getuserOrders() {
    const loggedUserId = localStorage.getItem('loggedUserId');
    if (loggedUserId) {
      this.getuserOrdersSub = this.orderService.getOrdersPerUser(loggedUserId).subscribe(userOrders => {
        console.log(userOrders);
        this.orders = userOrders;
      });
    }
  }
  getTodayResturantId() {
    this.getTodayResturantSub = this.resturantsService.getTodayResturant().subscribe(todayResturant => {
      this.todayResturant = todayResturant;
      console.log(this.todayResturant);
    });
  }

  ngOnDestroy(): void {
    this.userListnerSub?.unsubscribe();
    this.getuserOrdersSub?.unsubscribe();
    this.getTodayResturantSub?.unsubscribe();
  }

  reorder(order: any) {
    delete order._id;
    delete order.deliveryFees;
    delete order.taxFees;
    delete order.discount;
    delete order.grandTotal;
    delete order.status;
    delete order.createdOn;
    order.userId = '';
    order.resturantId = '';
    order.totalOrderPrice = 0;
    const itemsToAdd = order?.items?.map((item: any) => ({
      _id: item.item._id,
      name: item.item.name,
      price: item.item.price,
      resturantId: item.item.resturantId,
      count: item.count
    }));
    order.items = itemsToAdd;
    localStorage.setItem('order', JSON.stringify(order));
    this.router.navigate(['/home/cart']);
  }

}