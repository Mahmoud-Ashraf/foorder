import { Resturant } from 'src/app/models/resturant';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-order-reciept',
  templateUrl: './order-reciept.component.html',
  styleUrls: ['./order-reciept.component.scss']
})
export class OrderRecieptComponent implements OnInit {
  // resturant: any;
  collectedOrder: {
    items: any[],
    status: string,
    resturantId: Resturant,
    deliveryFees: number,
    taxFees: number,
    discount: number,
    usersCount: number,
    subtotalOrderPrice: number
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
      // this.getTodayOrders();
    })
  }
}
