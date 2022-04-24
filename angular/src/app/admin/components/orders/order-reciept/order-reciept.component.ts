import { ResturantsService } from 'src/app/shared/services/resturants.service';
import { Order } from '../../../../models/order';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
@Component({
  selector: 'app-order-reciept',
  templateUrl: './order-reciept.component.html',
  styleUrls: ['./order-reciept.component.scss']
})
export class OrderRecieptComponent implements OnInit {
  resturant: any;
  collectedOrder: any;
  orders: {
    orders: Order[],
    collectedOrderSubTotal: number,
    resturant: any
  } =
    {
      orders: [],
      collectedOrderSubTotal: 0,
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
        this.getCollectedOrderSubTotal();
        this.collectdOrders();
      });
    }
  }

  collectdOrders() {
    let orderItems: any = [];
    this.orders.orders.forEach(order => {
      orderItems = [...orderItems, ...order.items];
    })
    const arrayHashmap = orderItems.reduce((obj: any, item: any) => {
      obj[item._id] ? obj[item._id].count += item.count : (obj[item._id] = { ...item });
      return obj;
    }, {});
    this.collectedOrder = Object.values(arrayHashmap);
  }

  getCollectedOrderSubTotal() {
    let total = 0;
    this.orders.collectedOrderSubTotal = this.orders.orders.reduce(
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

  // getCollectedOrderTotal() {
  //   this.
  // }
}
