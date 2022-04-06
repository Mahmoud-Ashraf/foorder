import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  order: any;
  constructor(
    private orderService: OrderService
  ) { }
  ngOnInit(): void {
    this.getCurrentOrder();
  }

  private getCurrentOrder() {
    let jsonOrder = localStorage.getItem('order');
    if (jsonOrder) {
      this.order = JSON.parse(jsonOrder);
    }
    // console.log('order before filter', this.order);
    this.order.items = this.order?.items.filter((menuItem: any) => menuItem.count > 0);
    this.getTotalOrderPrice();
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
    this.getTotalOrderPrice();
    localStorage.setItem('order', JSON.stringify(this.order));
  }

  addOrder() {
    this.setUserAndResturantToOrder();
    // console.log('order before add', this.order);
    this.orderService.addOrder(this.order).subscribe(addedOrder => {
      console.log(addedOrder);
      localStorage.removeItem('order');
      this.order.items = [];
    });
  }

  private setUserAndResturantToOrder() {
    // this.order.resturantId = this.todayResturant._id;
    // console.log('today resturaaaaant', this.todayResturant);
    const toDayResturantId = localStorage.getItem('toDayResturantId');
    if (toDayResturantId) {
      this.order.resturantId = toDayResturantId;
    }
    const logedUserId = localStorage.getItem('loggedUserId');
    if (logedUserId) {
      this.order.userId = logedUserId;
    }
  }

  private getTotalOrderPrice() {
    this.order.items = this.order.items.map((item: any) => ({ ...item, totalPrice: item.price * item.count }));
    let total = 0;
    // let initialValue = 0
    this.order.totalOrderPrice = this.order.items.reduce(
      (previousValue: any, currentValue: any) => previousValue + currentValue.totalPrice
      , total
    )
    // console.log('get total price', this.order);
  }
  // resetCart() {
  //   this.cart = undefined;
  //   sessionStorage.removeItem('cart');
  // }

}
