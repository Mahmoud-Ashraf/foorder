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
  getTodayOrdersGenerateSub: Subscription
  // updateTodayOrderSub: Subscription
  // updateTodayOrderGenerateSub: Subscription
  // updateUserSub: Subscription
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
      this.getCollectedOrder(params.orderId);
    });
  }

  getCollectedOrder(collectedOrderId: string) {
    this.getCollectedOrderSub = this.orderService.getCollectedOrder(collectedOrderId).subscribe(collectedOrder => {
      this.collectedOrder = collectedOrder;
      if (this.collectedOrder.status === 'DONE') {
        this.router.navigate([`admin/orders/order-reciept/${collectedOrderId}`]);
      }
    })
  }

  generateReciept() {
    if (this.collectedOrder.status === 'ORDERED') {
      this.collectedOrder.status = 'DONE';
      this.collectedOrder.total = this.collectedOrder.subtotalOrderPrice + this.calculateValueFromPerc(this.collectedOrder.taxFees, this.collectedOrder.subtotalOrderPrice) + this.collectedOrder.deliveryFees - this.calculateValueFromPerc(this.collectedOrder.discount, this.collectedOrder.subtotalOrderPrice);
      this.updateCollectedOrderSub = this.orderService.updateCollectedOrder(this.collectedOrder._id, this.collectedOrder).subscribe((updatedCollectedOrder: any) => {
        this.orderService.getTodayOrders(this.collectedOrder.resturantId._id).subscribe((todayOrders: any) => {
          todayOrders.orders.forEach((order: any) => {
            order.deliveryFees = this.collectedOrder.deliveryFees / this.collectedOrder.users.length;
            order.taxFees = this.calculateValueFromPerc(this.collectedOrder.taxFees, order.totalOrderPrice);
            order.discount = this.calculateValueFromPerc(this.collectedOrder.discount, order.totalOrderPrice);
            order.grandTotal = order.totalOrderPrice + order.deliveryFees + order.taxFees - order.discount;
            order.status = 'DONE';
            this.orderService.updateTodayOrder(order._id, order).subscribe((updatedOrder) => {
              order.userId.wallet -= order.grandTotal;
              this.authService.updateUser(order.userId._id, order.userId).subscribe((updatedUser) => {
              })
            })
          });
        }, (err)=> {
          console.log(err);
        })
        this.router.navigate([`/admin/orders/order-reciept/${updatedCollectedOrder.collectedOrder._id}`]);
      });
    }
  }
  updateCollectedOrderStatus(status: string) {
    this.collectedOrder.status = status;
    this.updateCollectedOrderStatusSub = this.orderService.updateCollectedOrder(this.collectedOrder._id, this.collectedOrder).subscribe((updatedOrder: any) => {
      console.log(updatedOrder);
      this.orderService.getTodayOrders(this.collectedOrder.resturantId._id).subscribe((todayOrders: any) => {
        todayOrders.orders.forEach((order: any) => {
          // order.deliveryFees = this.collectedOrder.deliveryFees / this.collectedOrder.users.length;
          // order.taxFees = this.calculateValueFromPerc(this.collectedOrder.taxFees, order.totalOrderPrice);
          // order.discount = this.calculateValueFromPerc(this.collectedOrder.discount, order.totalOrderPrice);
          // order.grandTotal = order.totalOrderPrice + order.deliveryFees + order.taxFees - order.discount;
          order.status = 'ORDERED';
          this.orderService.updateTodayOrder(order._id, order).subscribe((updatedOrder) => {
            console.log('updated Orderrrr', updatedOrder);
            // order.userId.wallet -= order.grandTotal;
            // this.updateUserSub = this.authService.updateUser(order.userId._id, order.userId).subscribe((updatedUser) => {
            // })
          })
        });
      }, (err)=> {
        console.log(err);
      })
      // this.updateUserOrderSub = this.orderService.updateOrder()
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
    this.getTodayOrdersGenerateSub?.unsubscribe();
    // this.updateTodayOrderSub?.unsubscribe();
    // this.updateTodayOrderGenerateSub?.unsubscribe();
    // this.updateUserSub?.unsubscribe();
    this.updateCollectedOrderStatusSub?.unsubscribe();
  }
}
