import { AuthService } from './../../../shared/services/auth.service';
import { OrderService } from './../../../shared/services/order.service';
import { MenuService } from './../../../shared/services/menu.service';
import { ResturantsService } from 'src/app/shared/services/resturants.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuSection } from 'src/app/models/menu-section';
import { Resturant } from 'src/app/models/resturant';


@Component({
  selector: 'app-today-resturant-details',
  templateUrl: './today-resturant-details.component.html',
  styleUrls: ['./today-resturant-details.component.scss']
})
export class TodayResturantDetailsComponent implements OnInit {
  todayResturant: any;
  todayResturantMenu: any;
  timerEndTime: number[] = [16, 0, 0];
  order: any;
  // resturantId: string | undefined;
  // menuSections: MenuSection[];
  // resturants: any;

  constructor(
    private resturantsService: ResturantsService,
    private menuService: MenuService,
    private orderService: OrderService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.resturantsService.setTodayResturant();
    // this.getCurrentOrder();
    this.getTodayResturant();
    // console.log('my local order', this.order);
    // this.setUserAndResturantToOrder();
  }
  getMenu() {
    this.menuService.getMenu(this.todayResturant._id).subscribe((menu: any) => {
      // console.log('menu before', menu);
      this.todayResturantMenu = menu.menu.map((menuItem: any) => ({ ...menuItem, count: 0 }));
      // console.log('menu after', this.todayResturantMenu);
    })
  }

  private getTodayResturant() {
    this.resturantsService.getToDayResturantListner().subscribe(todayResturant => {
      this.todayResturant = todayResturant;
      let jsonOrder = localStorage.getItem('order');
      // console.log('today resturant', this.todayResturant);
      if (jsonOrder) {
        this.getCurrentOrder();
      } else {
        this.getMenu();
      }
    })
  }

  private getCurrentOrder() {
    let jsonOrder = localStorage.getItem('order');
    let order;
    if (jsonOrder) {
      order = JSON.parse(jsonOrder);
      this.todayResturantMenu = order.items;
    }
    // this.order.items = this.order.items.filter((menuItem: any) => menuItem.count > 0);
    // this.getTotalOrderPrice();
  }

  increaseOrderCount(menuItem: any) {
    menuItem.count +=1
    this.editCartItems();
  }
  
  decreseOrderCount(menuItem: any) {
    menuItem.count -=1
    this.editCartItems();
  }

  editCartItems() {
    // this.order.items = this.todayResturantMenu.filter((menuItem: any) => menuItem.count > 0);
    localStorage.setItem('order', JSON.stringify({items: this.todayResturantMenu}));
    // this.orderService.addOrder(this.order).subscribe(addedOrder => {
    //   console.log(addedOrder);
    // });
  }

  
}
