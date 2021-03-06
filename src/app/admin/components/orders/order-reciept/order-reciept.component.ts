import { ResturantsService } from './../../../../shared/services/resturants.service';
import { Subscription } from 'rxjs';
import { HelperService } from './../../../../shared/services/helper.service';
import { Resturant } from 'src/app/models/resturant';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-order-reciept',
  templateUrl: './order-reciept.component.html',
  styleUrls: ['./order-reciept.component.scss']
})
export class OrderRecieptComponent implements OnInit, OnDestroy {
  paramsSub: Subscription;
  getCollectedOrderSub: Subscription;
  getTodayOrdersSub: Subscription;
  getTodayResturantSub: Subscription;
  collectedOrder: {
    items: any[],
    status: string,
    resturantId: Resturant,
    deliveryFees: number,
    taxFees: number,
    discount: number,
    usersCount: number,
    subtotalOrderPrice: number,
    total?: number
  } = {
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
      subtotalOrderPrice: 0
    }
    orders: any;
    resturant: any;
  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private helperService: HelperService,
    private resturantsService: ResturantsService
  ) { }

  ngOnInit(): void {
    this.getTodayResturant();
    this.paramsSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.getCollectedOrder(params.orderId);
    });
  }

  getCollectedOrder(collectedOrderId: string) {
    this.getCollectedOrderSub = this.orderService.getCollectedOrder(collectedOrderId).subscribe(collectedOrder => {
      this.collectedOrder = collectedOrder;
    })
  }
  calculateValueFromPerc(perc: number) {
    return this.helperService.calculateValueFromPerc(perc, this.collectedOrder.subtotalOrderPrice);
  }

  ngOnDestroy(): void {
    this.paramsSub?.unsubscribe();
    this.getCollectedOrderSub?.unsubscribe();
  }

  getTodayResturant() {
    this.getTodayResturantSub = this.resturantsService.getTodayResturant().subscribe(toDayResturant => {
      this.resturant = toDayResturant;
      this.getTodayOrders();
    })
  }

  getTodayOrders() {
    if (this.resturant._id) {
      this.getTodayOrdersSub = this.orderService.getTodayOrders(this.resturant._id).subscribe((todayOrders: any) => {
        this.orders = todayOrders;
      });
    }
  }
  generateUserAvatar(userName: string) { 
    return this.helperService.generateUserAvatar(userName);
  }
}
