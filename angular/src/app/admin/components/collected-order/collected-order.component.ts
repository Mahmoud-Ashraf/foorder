import { ResturantsService } from 'src/app/shared/services/resturants.service';
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
  resturant: any;
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
    private resturantsService: ResturantsService,
  ) { }

  ngOnInit(): void {
    this.getTodayResturant();
  }

  getTodayOrders() {
    if (this.resturant._id) {
      this.orderService.getTodayOrders(this.resturant._id).subscribe((todayOrders: any) => {
        console.log(todayOrders);
        this.orders = todayOrders;
        this.getCollectedOrderPrice();
      });
    }
  }

  getCollectedOrderPrice() {
    let total = 0;
    this.orders.collectedOrderPrice = this.orders.orders.reduce(
      (previousValue: any, currentValue: any) => previousValue + currentValue.totalOrderPrice
      , total
    )
  }

  getTodayResturant() {
    this.resturantsService.getTodayResturant().subscribe(toDayResturant => {
      this.resturant = toDayResturant;
      this.getTodayOrders();
    })
  }
}
