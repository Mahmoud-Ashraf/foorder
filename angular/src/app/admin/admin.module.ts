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
import { CollectedOrderComponent } from './components/collected-order/collected-order.component';
import { TodayOrderComponent } from './components/today-order/today-order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddMenuItemComponent } from './components/menu/add-menu-item/add-menu-item.component';
import { MenuDetailsComponent } from './components/menu/menu-details/menu-details.component';
import { EditMeuItemComponent } from './components/menu/edit-meu-item/edit-meu-item.component';


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
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
})
export class AdminModule { }
