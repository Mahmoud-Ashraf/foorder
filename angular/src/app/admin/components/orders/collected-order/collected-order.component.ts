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
    total?: number
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
    private router: Router
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

  generateReciept() {
    this.collectedOrder.status = 'DONE';
    this.collectedOrder.taxFees = (this.collectedOrder.taxFees / 100) * this.collectedOrder.subtotalOrderPrice;
    this.collectedOrder.discount = (this.collectedOrder.discount / 100) * this.collectedOrder.subtotalOrderPrice;
    this.collectedOrder.total = this.collectedOrder.subtotalOrderPrice + this.collectedOrder.taxFees + this.collectedOrder.deliveryFees - this.collectedOrder.discount;
    this.orderService.updateCollectedOrder(this.collectedOrder._id, this.collectedOrder).subscribe((updatedCollectedOrder: any) => {
      this.router.navigate([`/admin/orders/order-reciept/${updatedCollectedOrder.collectedOrder._id}`]);
    })
  }
}
