import { Subscription } from 'rxjs';
import { HelperService } from './../../../../shared/services/helper.service';
import { AuthService } from './../../../../shared/services/auth.service';
import { Resturant } from 'src/app/models/resturant';
import { ResturantsService } from 'src/app/shared/services/resturants.service';
import { Order } from '../../../../models/order';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-collected-order',
  templateUrl: './collected-order.component.html',
  styleUrls: ['./collected-order.component.scss']
})
export class CollectedOrderComponent implements OnInit, OnDestroy {
  paramsSub: Subscription
  getCollectedOrderSub: Subscription
  updateCollectedOrderSub: Subscription
  getTodayOrdersSub: Subscription
  updateTodayOrderSub: Subscription
  updateUserSub: Subscription
  updateCollectedOrderStatusSub: Subscription
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

  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.paramsSub = this.activatedRoute.params.subscribe((params: Params) => {
      // const collecter = params.collectedOrderId;
      console.log(params);
      this.getCollectedOrder(params.orderId);
    });
  }

  getCollectedOrder(collectedOrderId: string) {
    this.getCollectedOrderSub = this.orderService.getCollectedOrder(collectedOrderId).subscribe(collectedOrder => {
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
      this.updateCollectedOrderSub = this.orderService.updateCollectedOrder(this.collectedOrder._id, this.collectedOrder).subscribe((updatedCollectedOrder: any) => {
        this.router.navigate([`/admin/orders/order-reciept/${updatedCollectedOrder.collectedOrder._id}`]);
        this.getTodayOrdersSub = this.orderService.getTodayOrders(this.collectedOrder.resturantId._id).subscribe((todayOrders: any) => {
          console.log(this.collectedOrder.users.length);
          todayOrders.orders.forEach((order: any) => {
            console.log('order when enter', order);
            order.deliveryFees = this.collectedOrder.deliveryFees / this.collectedOrder.users.length;
            order.taxFees = this.calculateValueFromPerc(this.collectedOrder.taxFees, order.totalOrderPrice);
            order.discount = this.calculateValueFromPerc(this.collectedOrder.discount, order.totalOrderPrice);
            order.grandTotal = order.totalOrderPrice + order.deliveryFees + order.taxFees - order.discount;
            order.status = 'DONE';
            console.log('order before update', order);
            this.updateTodayOrderSub = this.orderService.updateTodayOrder(order._id, order).subscribe((updatedOrder) => {
              console.log('updated Order', updatedOrder);
              order.userId.wallet -= order.grandTotal;
              this.updateUserSub = this.authService.updateUser(order.userId._id, order.userId).subscribe((updatedUser) => {
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
    this.updateCollectedOrderStatusSub = this.orderService.updateCollectedOrder(this.collectedOrder._id, this.collectedOrder).subscribe((updatedOrder: any) => {
      console.log(updatedOrder);
    });
  }

  calculateValueFromPerc(perc: number, total: number) {
    return this.helperService.calculateValueFromPerc(perc, total);
  }

  ngOnDestroy(): void {
    this.paramsSub?.unsubscribe();
    this.getCollectedOrderSub?.unsubscribe();
    this.updateCollectedOrderSub?.unsubscribe();
    this.getTodayOrdersSub?.unsubscribe();
    this.updateTodayOrderSub?.unsubscribe();
    this.updateUserSub?.unsubscribe();
    this.updateCollectedOrderStatusSub?.unsubscribe();
  }
}
