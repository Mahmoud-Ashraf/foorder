import { HomeService } from '../../services/home.service';
import { OrderService } from '../../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  order: any;
  constructor(
    private orderService: OrderService,
    private homeService: HomeService
  ) { }
  ngOnInit(): void {
    this.getCurrentOrder();
  }

  getCurrentOrder() {
    let jsonOrder = localStorage.getItem('order');
    if (jsonOrder) {
      this.order = JSON.parse(jsonOrder);
      // this.order.items = this.order?.items.filter((menuItem: any) => menuItem.count > 0);
      this.getTotalOrderPrice();
    }
    // console.log('order before filter', this.order);
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
    this.getTotalOrderPrice();
    // localStorage.setItem('order', JSON.stringify(this.order));
  }

  addOrder() {
    this.setUserAndResturantToOrder();
    // console.log('order before add', this.order);
    // let orderToAdd: {
    //   userId: string,
    //   resturantId: string,
    //   totalOrderPrice: number,
    //   items: any[]
    // };
    // orderToAdd = {
    //   userId: '',
    //   resturantId: '',
    //   totalOrderPrice: 0,
    //   items: []
    // };
    // orderToAdd.userId = this.order.userId;
    // orderToAdd.resturantId = this.order.resturantId;
    // orderToAdd.totalOrderPrice = this.order.totalOrderPrice;
    // this.order.items.forEach((orderItem: any) => {
    //   let count = orderItem.count;
    //   for (let i = 0; i < count; i++) {
    //     orderItem.count = 1;
    //     orderToAdd.items.push(orderItem);
    //   }
    // });
    this.order.items = this.order.items.map((item: any) => ({ item: { _id: item._id, name: item.name, price: item.price, resturantId: item.resturantId }, count: item.count }))
    console.log(this.order);
    this.orderService.addOrder(this.order).subscribe(addedOrder => {
      console.log(addedOrder);
      localStorage.removeItem('order');
      this.order.items = [];
      this.homeService.disableResturantDetails.next(true);
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

  getTotalOrderPrice() {
    // this.order.items = this.order.items.map((item: any) => ({ ...item, totalPrice: item.price * item.count }));
    let total = 0;
    // let initialValue = 0
    if (this.order.items.length > 0) {
      this.order.totalOrderPrice = this.order.items.reduce(
        (previousValue: any, currentValue: any) => previousValue + (currentValue.price * currentValue.count)
        , total
      )
    } else {
      this.order.totalOrderPrice = 0;
    }
    // console.log(total);
    return this.order.totalOrderPrice;
    // return this.order.totalOrderPrice;
    // console.log('get total price', this.order);
  }
  // resetCart() {
  //   this.cart = undefined;
  //   sessionStorage.removeItem('cart');
  // }

}
