import { Router } from '@angular/router';
import { HomeService } from './../../services/home.service';
import { AuthService } from './../../../shared/services/auth.service';
import { OrderService } from './../../../shared/services/order.service';
import { MenuService } from './../../../shared/services/menu.service';
import { ResturantsService } from 'src/app/shared/services/resturants.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

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
    this.getTodayResturant();
    this.showHideDependOnCountDown();
    this.homeService.getDisableResturantDetails().subscribe(disableOrdering => {
      console.log(disableOrdering);
      this.disableTodayResturant = disableOrdering;
    })
  }
  getMenu() {
    this.menuService.getMenu(this.todayResturant?._id).subscribe((menu: any) => {
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
      }
      
      this.todayResturantMenu = menu.menu;
      this.getTodayOrder();
    })
  }

  getIndex(arr: any, id: any): number {
    return arr.findIndex((object: any) => {
      return object._id === id;
    });
  }

  private getTodayResturant() {
    this.resturantsService.getTodayResturant().subscribe(todayResturant => {
      this.todayResturant = todayResturant;
      this.getMenu();
    })
  }

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

  addOrderToCart() {
    this.getTodayOrder();
    localStorage.setItem('order', JSON.stringify(this.order));
    this.router.navigate(['home/cart']);
  }

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
  }

  decreseOrderCount(menuItem: any) {
    menuItem.count -= 1;
    this.getTodayOrder();
  }
  increaseOrderCount(menuItem: any) {
    menuItem.count += 1;
    this.getTodayOrder();
  }


}
