import { Router } from '@angular/router';
import { HomeService } from './../../services/home.service';
import { AuthService } from './../../../shared/services/auth.service';
import { OrderService } from './../../../shared/services/order.service';
import { MenuService } from './../../../shared/services/menu.service';
import { ResturantsService } from 'src/app/shared/services/resturants.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuSection } from 'src/app/models/menu-section';
import { Resturant } from 'src/app/models/resturant';


@Component({
  selector: 'app-today-resturant-details',
  templateUrl: './today-resturant-details.component.html',
  styleUrls: ['./today-resturant-details.component.scss']
})
export class TodayResturantDetailsComponent implements OnInit, OnDestroy {
  todayResturant: any;
  todayResturantMenu: any;
  orderEndTime: number[] = [23, 50, 0];
  order = {
    userId: '',
    resturantId: '',
    items: [],
    totalOrderPrice: 0,
  };
  showResturantDetails: boolean = false;
  countDownTimer: any;
  disableTodayResturant: boolean;
  constructor(
    private resturantsService: ResturantsService,
    private menuService: MenuService,
    private orderService: OrderService,
    private authService: AuthService,
    private homeService: HomeService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.resturantsService.setTodayResturant();
    this.getTodayResturant();
    this.showHideDependOnCountDown();
    this.homeService.getDisableResturantDetails().subscribe(disableOrdering => {
      console.log(disableOrdering);
      this.disableTodayResturant = disableOrdering;
    })
  }
  getMenu() {
    this.menuService.getMenu(this.todayResturant?._id).subscribe((menu: any) => {
      // console.log('menu before', menu);
      menu.menu.forEach((menuItem: any) => {
        menuItem.count = 0;
      });
      let jsonOrder = localStorage.getItem('order');
      if (jsonOrder) {
        const localOrder = JSON.parse(jsonOrder);
        menu.menu = menu.menu.filter((menuItem: any) => {
          return this.getIndex(localOrder.items, menuItem._id) < 0
        });
        menu.menu = [...localOrder.items, ...menu.menu];
        // let mergedOrder = localOrder.items.concat(menu.menu.filter((menuItem: any) => localOrder.items.indexOf(menuItem._id) < 0));
      }
      // var a = [1, 2, 3], b = [101, 2, 1, 10]
      // var c = a.concat(b.filter((item) => a.indexOf(item) < 0))
      this.todayResturantMenu = menu.menu;
      this.getTodayOrder();
      // console.log('menu after', this.todayResturantMenu);
    })
  }

  getIndex(arr: any, id: any): number {
    return arr.findIndex((object: any) => {
      return object._id === id;
    });
  }

  private getTodayResturant() {
    this.resturantsService.getToDayResturantListner().subscribe(todayResturant => {
      this.todayResturant = todayResturant;
      // let jsonOrder = localStorage.getItem('order');
      // // console.log('today resturant', this.todayResturant);
      // if (jsonOrder) {
      //   this.getCurrentOrder();
      // } else {
      this.getMenu();
      // }
    })
  }

  // private getCurrentOrder() {
  //   let jsonOrder = localStorage.getItem('order');
  //   let order;
  //   if (jsonOrder) {
  //     order = JSON.parse(jsonOrder);
  //     this.todayResturantMenu = order.items;
  //   }
  //   // this.order.items = this.order.items.filter((menuItem: any) => menuItem.count > 0);
  //   // this.getTotalOrderPrice();
  // }

  private showHideDependOnCountDown() {
    const timeTillOrderEnd = this.homeService.calcDateDiffInMs(this.orderEndTime);
    if (timeTillOrderEnd > 0) {
      this.showResturantDetails = true;
      this.countDownTimer = setTimeout(() => {
        this.resetTodayResturant();
      }, timeTillOrderEnd);
    } else {
      this.resetTodayResturant();
    }
  }

  // addItemToCart(menuItem: any) {
  //   menuItem.count = 1;
  //   // this.editCartItems();
  // }

  // removeItemFromCart(menuItem: any) {
  //   menuItem.count = 0;
  //   // this.editCartItems();
  // }

  addOrderToCart() {
    this.getTodayOrder();
    localStorage.setItem('order', JSON.stringify(this.order));
    this.router.navigate(['/cart']);
  }

  // editCartItems() {
  //   // this.order.items = this.todayResturantMenu.filter((menuItem: any) => menuItem.count > 0);
  //   localStorage.setItem('order', JSON.stringify({items: this.todayResturantMenu}));
  //   // this.orderService.addOrder(this.order).subscribe(addedOrder => {
  //   //   console.log(addedOrder);
  //   // });
  // }

  getTodayOrder() {
    this.order.items = this.todayResturantMenu.filter((menuItem: any) => menuItem.count > 0);
  }

  private resetTodayResturant() {
    this.showResturantDetails = false;
    this.homeService.disableResturantDetails.next(true);
    localStorage.removeItem('order');
  }

  ngOnDestroy(): void {
    if (this.countDownTimer) {
      clearTimeout(this.countDownTimer);
    }
    // this.countDownTimer
  }

  // pushToOrder(menuItem: any) {
  //   this.order.items.push(menuItem);
  // }
  decreseOrderCount(menuItem: any) {
    menuItem.count -= 1;
    this.getTodayOrder();
  }
  increaseOrderCount(menuItem: any) {
    menuItem.count += 1;
    this.getTodayOrder();
  }


}
