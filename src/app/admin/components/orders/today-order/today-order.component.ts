import { HelperService } from 'src/app/shared/services/helper.service';
import { Router } from '@angular/router';
import { ResturantsService } from 'src/app/shared/services/resturants.service';
import { Order } from '../../../../models/order';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
@Component({
  selector: 'app-today-order',
  templateUrl: './today-order.component.html',
  styleUrls: ['./today-order.component.scss']
})
export class TodayOrderComponent implements OnInit {
  resturant: any;
  users: any[] = [];
  collectedOrder: {
    items: any[],
    resturantId: string,
    usersCount: number,
    subtotalOrderPrice: number,
    users?: string[];
  } = {
      items: [],
      resturantId: '',
      usersCount: 0,
      subtotalOrderPrice: 0
    }
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
    private router: Router,
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.orderService.checkTodayCollectedOrder().subscribe(collectedOrder => {
      if (collectedOrder.collectedOrder) {
        this.router.navigate([`admin/orders/collected-order/${collectedOrder.collectedOrder._id}`]);
      }
    })
    this.getTodayResturant();
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

  getTodayOrders() {
    if (this.resturant._id) {
      this.orderService.getTodayOrders(this.resturant._id).subscribe((todayOrders: any) => {
        console.log(todayOrders);
        this.orders = todayOrders;
        if (this.orders && this.orders.orders && this.orders.orders.length > 0) {
          this.getCollectedOrderPrice();
        }
      });
    }
  }

  collectOrder() {
    if (this.orders && this.orders.orders && this.orders.orders.length > 0) {
      this.setCollectedOrderConfig();
      this.addCollectedOrder();
    }
  }

  getCollectedOrderItems() {
    let orderItems: any = [];
    this.orders.orders.forEach(order => {
      orderItems = [...orderItems, ...order.items];
      this.users.push(order.userId);
    })
    const arrayHashmap = orderItems.reduce((obj: any, item: any) => {
      obj[item._id] ? obj[item._id].count += item.count : (obj[item._id] = { ...item });
      return obj;
    }, {});
    return Object.values(arrayHashmap);
    // console.log(this.collectedOrder);
  }

  setCollectedOrderConfig() {
    this.collectedOrder.items = this.getCollectedOrderItems();
    // this.collectedOrder.status = 'PENDING';
    this.collectedOrder.resturantId = this.resturant._id;
    // this.collectedOrder.deliveryFees = 0;
    // this.collectedOrder.taxFees = 0;
    // this.collectedOrder.discount = 0;
    this.collectedOrder.users = this.users;
    this.collectedOrder.usersCount = this.orders.orders.length;
    this.collectedOrder.subtotalOrderPrice = this.orders.collectedOrderPrice;
  }

  addCollectedOrder() {
    this.orderService.collectOrder(this.collectedOrder).subscribe(
      (collectedOrder: any) => {
        console.log(collectedOrder);
        this.router.navigate([`admin/orders/collected-order/${collectedOrder.collectedOrder._id}`]);
      },
      err => {
        console.log(err);
      })
  }
  generateUserAvatar(userName: string) {
    return this.helperService.generateUserAvatar(userName);
  }
}
