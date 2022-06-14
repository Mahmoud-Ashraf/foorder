import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { SharedModule } from '../shared/shared.module';
import { PollComponent } from './components/poll/poll.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { TodayResturantDetailsComponent } from './components/today-resturant-details/today-resturant-details.component';
import { ResturantMenuComponent } from './components/resturant-menu/resturant-menu.component';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    ClientComponent,
    PollComponent,
    CountDownComponent,
    TodayResturantDetailsComponent,
    ResturantMenuComponent,
    CartComponent,
    ProfileComponent,
    WalletComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  // exports: [
  //   SharedModule
  // ]
})
export class ClientModule { }
