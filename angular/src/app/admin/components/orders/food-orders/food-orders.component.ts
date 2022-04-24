import { OrderService } from './../../../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-orders',
  templateUrl: './food-orders.component.html',
  styleUrls: ['./food-orders.component.scss']
})
export class FoodOrdersComponent implements OnInit {
  ordersHistory: any;
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.orderService.getCollectedOrders().subscribe(collectedOrders => {
      this.ordersHistory = collectedOrders.collectedOrders;
    })
  }

}
