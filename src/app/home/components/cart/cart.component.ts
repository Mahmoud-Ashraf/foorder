import { ResturantsService } from 'src/app/shared/services/resturants.service';
import { HomeService } from '../../services/home.service';
import { OrderService } from '../../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  order: any;
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
    console.log(this.order);
    this.setUserAndResturantToOrder(orderToAdd)
  }

  addOrder(orderToAdd: any) {
    console.log(orderToAdd);
    this.orderService.addOrder(orderToAdd).subscribe(addedOrder => {
      console.log(addedOrder);
      localStorage.removeItem('order');
      this.order.items = [];
      this.homeService.disableResturantDetails.next(true);
    }, err => {
      console.log(err);
    });
  }

  setUserAndResturantToOrder(orderToAdd: any) {
    console.log(orderToAdd);
    this.resturantsService.getTodayResturant().subscribe(todayResturant => {
      console.log(todayResturant);
      orderToAdd.resturantId = todayResturant._id;
      this.authService.getLoggedUser();
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

}
