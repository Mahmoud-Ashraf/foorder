import { Router } from '@angular/router';
import { ResturantsService } from './../../../shared/services/resturants.service';
import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from '../../services/home.service';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  orders: any;
  private userListnerSub: Subscription;
  private getuserOrdersSub: Subscription;
  private getTodayResturantSub: Subscription;
  loggedUser: any;
  todayResturant: any;
  getConfigSub: Subscription;
  pollEndTime: string;
  userOrdered: boolean;
  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private resturantsService: ResturantsService,
    private router: Router,
    private homeService: HomeService,
    private helperService: HelperService,
  ) { }

  ngOnInit(): void {
    this.loggedUser = this.authService.getLoggedUser();
    this.userListnerSub = this.authService
      .getAuthUserListner()
      .subscribe((user: any) => {
        this.loggedUser = user;
      })
    this.getuserOrders();
    this.getTodayResturantId();
    this.getConfig();
  }

  getuserOrders() {
    const loggedUserId = localStorage.getItem('loggedUserId');
    if (loggedUserId) {
      this.getuserOrdersSub = this.orderService.getOrdersPerUser(loggedUserId).subscribe(userOrders => {
        this.orders = userOrders;
        this.checkUserOrdered();
        console.log(this.orders);
      });
    }
  }
  getTodayResturantId() {
    this.getTodayResturantSub = this.resturantsService.getTodayResturant().subscribe(todayResturant => {
      this.todayResturant = todayResturant;
    });
  }

  ngOnDestroy(): void {
    this.userListnerSub?.unsubscribe();
    this.getuserOrdersSub?.unsubscribe();
    this.getTodayResturantSub?.unsubscribe();
    this.getConfigSub?.unsubscribe();
  }

  reorder(order: any) {
    if(this.checkForOrderingStart(this.pollEndTime) && !this.userOrdered && order?.resturantId?._id === this.todayResturant?._id) {
      delete order._id;
      delete order.deliveryFees;
      delete order.taxFees;
      delete order.discount;
      delete order.grandTotal;
      delete order.status;
      delete order.createdOn;
      order.userId = '';
      order.resturantId = '';
      order.totalOrderPrice = 0;
      const itemsToAdd = order?.items?.map((item: any) => ({
        _id: item.item._id,
        name: item.item.name,
        price: item.item.price,
        resturantId: item.item.resturantId,
        ingredients: item.item.ingredients,
        count: item.count
      }));
      order.items = itemsToAdd;
      localStorage.setItem('order', JSON.stringify(order));
      this.router.navigate(['/home/cart']);
    }
  }

  checkForOrderingStart(pollEndTime: string) {
    return this.homeService.calcDateDiffInMs(pollEndTime) < 0;
  }

  getConfig() {
    this.getConfigSub = this.helperService.getConfig().subscribe((config: any) => {
      this.pollEndTime = config.config[0].voteEndTime;
    })
  }

  checkUserOrdered() {
    this.userOrdered = this.orders.some((order: any) => {
      return new Date(order.createdOn).getDate() === new Date().getDate();
    });
    console.log(this.userOrdered);
  }

}