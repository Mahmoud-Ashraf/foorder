import { Subscription } from 'rxjs';
import { ResturantsService } from 'src/app/shared/services/resturants.service';
import { HomeService } from '../../services/home.service';
import { OrderService } from '../../../shared/services/order.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  order: any;
  addOrderSub: Subscription
  getTodayResturantSub: Subscription;
  cartMsg: string;
  cartMsgType: string;
  constructor(
    private orderService: OrderService,
    private resturantsService: ResturantsService,
    private authService: AuthService,
    private homeService: HomeService
  ) { }
  ngOnInit(): void {
    this.getCurrentOrder();
  }

  getCurrentOrder() {
    let jsonOrder = localStorage.getItem('order');
    if (jsonOrder) {
      this.order = JSON.parse(jsonOrder);
      this.order.totalOrderPrice = this.getTotalOrderPrice();
      this.order.grandTotal = this.getTotalOrderPrice();
    }
  }

  increaseOrderCount(menuItem: any) {
    menuItem.count += 1
    this.editCartItems();
  }

  decreseOrderCount(menuItem: any) {
    menuItem.count -= 1
    this.editCartItems();
  }

  editCartItems() {
    this.order.items = this.order.items.filter((item: any) => item.count > 0);
    localStorage.setItem('order', JSON.stringify(this.order));
    this.order.totalOrderPrice = this.getTotalOrderPrice();
    this.order.grandTotal = this.getTotalOrderPrice();
  }

  submitOrder() {
    if (!this.order) {
      this.order = {};
      this.order.items = [];
    }
    const itemsToAdd = this.order?.items?.map((item: any) => ({ item: { _id: item._id, name: item.name, price: item.price, resturantId: item.resturantId }, count: item.count }))
    let orderToAdd = { ...this.order };
    orderToAdd.items = itemsToAdd;
    this.setUserAndResturantToOrder(orderToAdd)
  }

  addOrder(orderToAdd: any) {
    this.addOrderSub = this.orderService.addOrder(orderToAdd).subscribe((addedOrder: any) => {
      localStorage.removeItem('order');
      this.order.items = [];
      this.homeService.disableResturantDetails.next(true);
      this.cartMsg = addedOrder.message;
      this.cartMsgType = 'SUCCESS';
    }, err => {
      console.log(err);
      this.cartMsg = err.error.message;
      this.cartMsgType = 'ERROR';
    });
  }

  setUserAndResturantToOrder(orderToAdd: any) {
    this.getTodayResturantSub = this.resturantsService.getTodayResturant().subscribe(todayResturant => {
      orderToAdd.resturantId = todayResturant._id;
      // this.authService.getLoggedUser();
      orderToAdd.userId = this.authService.getLoggedUser()._id;
      this.addOrder(orderToAdd);
    });
  }

  getTotalOrderPrice() {
    let total = 0;
    if (this.order?.items?.length > 0) {
      return this.order.items.reduce(
        (previousValue: any, currentValue: any) => previousValue + (currentValue.price * currentValue.count)
        , total
      )
    } else {
      return 0;
    }
  }

  ngOnDestroy(): void {
    this.addOrderSub?.unsubscribe();
    this.getTodayResturantSub?.unsubscribe();
  }

}
