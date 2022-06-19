import { Subscription } from 'rxjs';
import { Resturant } from './../../../../models/resturant';
import { ResturantsService } from './../../../../shared/services/resturants.service';
import { OrderService } from './../../../../shared/services/order.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-food-orders',
  templateUrl: './food-orders.component.html',
  styleUrls: ['./food-orders.component.scss']
})
export class FoodOrdersComponent implements OnInit, OnDestroy {
  ordersHistory: any;
  todayResturant: Resturant;
  now = new Date();
  getTodayResturantSub: Subscription;
  getCollectedOrdersSub: Subscription;
  constructor(
    private orderService: OrderService,
    private resturantsService: ResturantsService
  ) { }

  ngOnInit(): void {
    this.getTodayResturantSub = this.resturantsService.getTodayResturant().subscribe(todayResturant => {
      this.todayResturant = todayResturant;
    })
    this.getCollectedOrdersSub = this.orderService.getCollectedOrders().subscribe(collectedOrders => {
      this.ordersHistory = collectedOrders.collectedOrders.filter((order: any) => order.status === 'DONE');
    })
  }

  ngOnDestroy(): void {
    this.getTodayResturantSub?.unsubscribe();
    this.getCollectedOrdersSub?.unsubscribe();
  }

}
