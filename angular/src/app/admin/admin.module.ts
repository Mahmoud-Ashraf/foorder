import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';

import { ResturantsComponent } from './components/resturants/resturants.component';

import { AddResturantComponent } from './components/resturants/add-resturant/add-resturant.component';
import { ResturantsDetailsComponent } from './components/resturants/resturants-details/resturants-details.component';
import { EditResturantComponent } from './components/resturants/edit-resturant/edit-resturant.component';
import { ResturantDetailsComponent } from './components/resturants/resturant-details/resturant-details.component';

import { UsersComponent } from './components/users/users.component';

import { UsersDetailsComponent } from './components/users/users-details/users-details.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { UserOrdersComponent } from './components/users/user-orders/user-orders.component';

import { WalletsComponent } from './components/wallets/wallets.component';
import { CollectedOrderComponent } from './components/orders/collected-order/collected-order.component';
import { TodayOrderComponent } from './components/orders/today-order/today-order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddMenuItemComponent } from './components/menu/add-menu-item/add-menu-item.component';
import { MenuDetailsComponent } from './components/menu/menu-details/menu-details.component';
import { EditMeuItemComponent } from './components/menu/edit-meu-item/edit-meu-item.component';
import { HomeComponent } from './components/home/home.component';
// import {ChartModule} from 'primeng/chart';
import { NgChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';
import { TableFilterComponent } from './components/table-filter/table-filter.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { FoodOrdersComponent } from './components/orders/food-orders/food-orders.component';
import { OrderRecieptComponent } from './components/orders/order-reciept/order-reciept.component';



@NgModule({
  declarations: [
    AdminComponent,

    ResturantsComponent,

    ResturantsDetailsComponent,
    ResturantDetailsComponent,
    AddResturantComponent,
    EditResturantComponent,

    UsersComponent,

    UsersDetailsComponent,
    UserDetailsComponent,
    AddUserComponent,
    EditUserComponent,
    UserOrdersComponent,

    CollectedOrderComponent,
    TodayOrderComponent,
    WalletsComponent,
    OrdersComponent,
    MenuComponent,
    AddMenuItemComponent,
    MenuDetailsComponent,
    EditMeuItemComponent,
    HomeComponent,
    TableFilterComponent,
    PaginatorComponent,
    FoodOrdersComponent,
    OrderRecieptComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    // ChartModule
    NgChartsModule
  ],
})
export class AdminModule {
  constructor() {
    Chart.defaults.elements.bar.borderRadius = 8;
    Chart.defaults.elements.bar.backgroundColor = '#56CCF2';
    Chart.defaults.elements.bar.borderColor = '#56CCF2';
    Chart.defaults.plugins.legend.display = false;
  }
}
