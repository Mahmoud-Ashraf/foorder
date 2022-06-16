import { HelperService } from './../../../../shared/services/helper.service';
import { AuthService } from './../../../../shared/services/auth.service';
import { Resturant } from 'src/app/models/resturant';
import { ResturantsService } from 'src/app/shared/services/resturants.service';
import { Order } from '../../../../models/order';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-collected-order',
  templateUrl: './collected-order.component.html',
  styleUrls: ['./collected-order.component.scss']
})
export class CollectedOrderComponent implements OnInit {
  // resturant: any;
  collectedOrder: {
    _id: string,
    items: any[],
    status: string,
    resturantId: Resturant,
    deliveryFees: number,
    taxFees: number,
    discount: number,
    usersCount: number,
    subtotalOrderPrice: number,
    total?: number,
    users: string[]
  } = {
      _id: '',
      items: [],
      status: '',
      resturantId: {
        _id: '',
        name: '',
        type: '',
      },
      deliveryFees: 0,
      taxFees: 0,
      discount: 0,
      usersCount: 0,
      subtotalOrderPrice: 0,
      users: []
    }
  // orders: {
  //   orders: Order[],
  //   collectedOrderSubTotal: number,
  //   resturant: any
  // } =
  //   {
  //     orders: [],
  //     collectedOrderSubTotal: 0,
  //     resturant: {}
  //   };

  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      // const collecter = params.collectedOrderId;
      console.log(params);
      this.getCollectedOrder(params.orderId);
    });
  }

  getCollectedOrder(collectedOrderId: string) {
    this.orderService.getCollectedOrder(collectedOrderId).subscribe(collectedOrder => {
      this.collectedOrder = collectedOrder;
      console.log(this.collectedOrder);
      if (this.collectedOrder.status === 'DONE') {
        this.router.navigate([`admin/orders/order-reciept/${collectedOrderId}`]);
      }
      // this.getTodayOrders();
    })
  }

  generateReciept() {
    if (this.collectedOrder.status === 'ORDERED') {
      this.collectedOrder.status = 'DONE';
      this.collectedOrder.total = this.collectedOrder.subtotalOrderPrice + this.calculateValueFromPerc(this.collectedOrder.taxFees, this.collectedOrder.subtotalOrderPrice) + this.collectedOrder.deliveryFees - this.calculateValueFromPerc(this.collectedOrder.discount, this.collectedOrder.subtotalOrderPrice);
      this.orderService.updateCollectedOrder(this.collectedOrder._id, this.collectedOrder).subscribe((updatedCollectedOrder: any) => {
        this.router.navigate([`/admin/orders/order-reciept/${updatedCollectedOrder.collectedOrder._id}`]);
        this.orderService.getTodayOrders(this.collectedOrder.resturantId._id).subscribe((todayOrders: any) => {
          console.log(this.collectedOrder.users.length);
          todayOrders.orders.forEach((order: any) => {
            console.log('order when enter', order);
            order.deliveryFees = this.collectedOrder.deliveryFees / this.collectedOrder.users.length;
            order.taxFees = this.calculateValueFromPerc(this.collectedOrder.taxFees, order.totalOrderPrice);
            order.discount = this.calculateValueFromPerc(this.collectedOrder.discount, order.totalOrderPrice);
            order.grandTotal = order.totalOrderPrice + order.deliveryFees + order.taxFees - order.discount;
            order.status = 'DONE';
            console.log('order before update', order);
            this.orderService.updateTodayOrder(order._id, order).subscribe((updatedOrder) => {
              console.log('updated Order', updatedOrder);
              order.userId.wallet -= order.grandTotal;
              this.authService.updateUser(order.userId._id, order.userId).subscribe((updatedUser) => {
                console.log('updated User', updatedUser);
              })
            })
          });
        })
      });
    }
  }
  updateCollectedOrderStatus(status: string) {
    this.collectedOrder.status = status;
    this.orderService.updateCollectedOrder(this.collectedOrder._id, this.collectedOrder).subscribe((updatedOrder: any) => {
      console.log(updatedOrder);
    });
  }

  calculateValueFromPerc(perc: number, total: number) {
    return this.helperService.calculateValueFromPerc(perc, total);
  }
}
