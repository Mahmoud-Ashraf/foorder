import { Subscription } from 'rxjs';
import { HelperService } from 'src/app/shared/services/helper.service';
import { Router } from '@angular/router';
import { HomeService } from './../../services/home.service';
import { MenuService } from './../../../shared/services/menu.service';
import { ResturantsService } from 'src/app/shared/services/resturants.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

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
  constructor(
    private resturantsService: ResturantsService,
    private menuService: MenuService,
    private homeService: HomeService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getTodayResturant();
    // this.getConfig();
    this.homeService.getDisableResturantDetails().subscribe(disableOrdering => {
      console.log(disableOrdering);
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


}
