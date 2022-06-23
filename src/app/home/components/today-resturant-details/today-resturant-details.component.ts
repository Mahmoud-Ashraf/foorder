import { Subscription } from 'rxjs';
import { HelperService } from 'src/app/shared/services/helper.service';
import { Router } from '@angular/router';
import { HomeService } from './../../services/home.service';
import { MenuService } from './../../../shared/services/menu.service';
import { ResturantsService } from 'src/app/shared/services/resturants.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-today-resturant-details',
  templateUrl: './today-resturant-details.component.html',
  styleUrls: ['./today-resturant-details.component.scss']
})
export class TodayResturantDetailsComponent implements OnInit, OnDestroy {
  todayResturant: any;
  todayResturantMenu: any;
  order = {
    userId: '',
    resturantId: '',
    items: [],
    totalOrderPrice: 0,
  };
  disableTodayResturant: boolean;
  @Input() orderEndTime: string;
  getMenuSub: Subscription;
  getTodayResturantSub: Subscription;
  getUserSub: Subscription;
  currentUser: any;
  userOrdered: boolean;
  constructor(
    private resturantsService: ResturantsService,
    private menuService: MenuService,
    private homeService: HomeService,
    private router: Router,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.getUser();
    this.getTodayResturant();
    this.homeService.getDisableResturantDetails().subscribe(disableOrdering => {
      this.disableTodayResturant = disableOrdering;
    })
  }

  getMenu() {
    this.getMenuSub = this.menuService.getMenu(this.todayResturant?._id).subscribe((menu: any) => {
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
    this.getTodayResturantSub = this.resturantsService.getTodayResturant().subscribe(todayResturant => {
      this.todayResturant = todayResturant;
      this.getMenu();
    })
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
    this.homeService.disableResturantDetails.next(true);
    localStorage.removeItem('order');
  }

  ngOnDestroy(): void {
    this.getMenuSub?.unsubscribe();
    this.getTodayResturantSub?.unsubscribe();
  }

  decreseOrderCount(menuItem: any) {
    menuItem.count -= 1;
    this.getTodayOrder();
  }
  increaseOrderCount(menuItem: any) {
    menuItem.count += 1;
    this.getTodayOrder();
  }

  getUser() {
    this.currentUser = this.authService.getLoggedUser();
    this.checkUserOrdered();
    this.getUserSub = this.authService.getAuthUserListner().subscribe((user: any) => {
      this.currentUser = user;
      this.checkUserOrdered();
    })
  }

  checkUserOrdered() {
    this.userOrdered = this.currentUser.orders.some((order: any) => {
      return new Date(order.createdOn).getDate() === new Date().getDate();
    });
  }

}
