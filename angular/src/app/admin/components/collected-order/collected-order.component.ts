import { Order } from './../../../models/order';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-collected-order',
  templateUrl: './collected-order.component.html',
  styleUrls: ['./collected-order.component.scss']
})
export class CollectedOrderComponent implements OnInit {
  resturantId: any;
  orders: {
    orders: Order[],
    collectedOrderPrice: number,
    resturant: any
  } =
    {
      orders: [],
      collectedOrderPrice: 0,
      resturant: {}
    };

  constructor(
    private orderService: OrderService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // this.orders.collectedOrderPrice = 0;
    this.resturantId = localStorage.getItem('toDayResturantId');
    this.getTodayOrders();
    // this.authService.getAuthUserListner().subscribe((user: any) => {
    //   this.getuserOrders()
    // })
  }

  getTodayOrders() {
    if (this.resturantId) {
      this.orderService.getTodayOrders(this.resturantId).subscribe((todayOrders: any) => {
        console.log(todayOrders);
        this.orders = todayOrders;
        this.getCollectedOrderPrice();
        // const uniqeOrder = new Set(this.orders.items);
        // console.log(this.orders);
      });
    }
  }

  getCollectedOrderPrice() {
    // this.orders.collectedOrderPrice = 
    let total = 0;
    // let initialValue = 0
    this.orders.collectedOrderPrice = this.orders.orders.reduce(
      (previousValue: any, currentValue: any) => previousValue + currentValue.totalOrderPrice
      , total
    )
  }
}
