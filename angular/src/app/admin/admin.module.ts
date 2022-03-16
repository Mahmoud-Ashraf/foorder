import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { ResturantsComponent } from './components/resturants/resturants.component';
import { ResturantDetailsComponent } from './components/resturant-details/resturant-details.component';
import { WalletsComponent } from './components/wallets/wallets.component';
import { CollectedOrderComponent } from './components/collected-order/collected-order.component';
import { UsersOrdersComponent } from './components/users-orders/users-orders.component';
import { TodayOrderComponent } from './components/today-order/today-order.component';


@NgModule({
  declarations: [
    AdminComponent,
    ResturantsComponent,
    ResturantDetailsComponent,
    WalletsComponent,
    CollectedOrderComponent,
    UsersOrdersComponent,
    TodayOrderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  // exports: [
  //   SharedModule
  // ]
})
export class AdminModule { }
