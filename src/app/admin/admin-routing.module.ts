import { ConfigurationsComponent } from './components/configurations/configurations.component';
import { OrderRecieptComponent } from './components/orders/order-reciept/order-reciept.component';
import { FoodOrdersComponent } from './components/orders/food-orders/food-orders.component';
import { TodayOrderComponent } from './components/orders/today-order/today-order.component';
import { HomeComponent } from './../admin/components/home/home.component';
import { EditMeuItemComponent } from './components/menu/edit-meu-item/edit-meu-item.component';
import { AddMenuItemComponent } from './components/menu/add-menu-item/add-menu-item.component';
import { MenuDetailsComponent } from './components/menu/menu-details/menu-details.component';
import { MenuComponent } from './components/menu/menu.component';
import { WalletsComponent } from './components/wallets/wallets.component';
import { CollectedOrderComponent } from './components/orders/collected-order/collected-order.component';
import { UserOrdersComponent } from './components/users/user-orders/user-orders.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { UsersDetailsComponent } from './components/users/users-details/users-details.component';
import { UsersComponent } from './components/users/users.component';
import { EditResturantComponent } from './components/resturants/edit-resturant/edit-resturant.component';
import { AddResturantComponent } from './components/resturants/add-resturant/add-resturant.component';
import { ResturantsDetailsComponent } from './components/resturants/resturants-details/resturants-details.component';
import { ResturantDetailsComponent } from './components/resturants/resturant-details/resturant-details.component';
import { ResturantsComponent } from './components/resturants/resturants.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'resturants', component: ResturantsComponent,
        children: [
          { path: '', component: ResturantsDetailsComponent },
          { path: 'add-resturant', component: AddResturantComponent },
          { path: 'edit-resturant/:resturantId', component: EditResturantComponent },
          { path: ':resturantId', component: ResturantDetailsComponent },
        ]
      },
      {
        path: 'users', component: UsersComponent,
        children: [
          { path: '', component: UsersDetailsComponent },
          { path: 'add-user', component: AddUserComponent },
          { path: 'edit-user/:userId', component: EditUserComponent },
          { path: 'user-orders/:userId', component: UserOrdersComponent },
          { path: ':userId', component: UserDetailsComponent },
        ]
      },
      {
        path: 'menu', component: MenuComponent,
        children: [
          { path: '', component: MenuDetailsComponent },
          { path: 'add-menu-item', component: AddMenuItemComponent },
          { path: 'edit-menu-item/:menuItemId', component: EditMeuItemComponent }
        ]
      },
      {
        path: 'orders', component: OrdersComponent,
        children: [
          { path: '', redirectTo: 'food-orders' },
          { path: 'food-orders', component: FoodOrdersComponent },
          { path: 'today-order', component: TodayOrderComponent },
          { path: 'collected-order/:orderId', component: CollectedOrderComponent },
          { path: 'order-reciept/:orderId', component: OrderRecieptComponent }
        ]
      },
      { path: 'wallets', component: WalletsComponent },
      { path: 'config', component: ConfigurationsComponent }

      // { path: }
      // { path: 'resturants/:id', component: ResturantDetailsComponent }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
