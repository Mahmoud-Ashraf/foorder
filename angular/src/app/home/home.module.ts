import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { PollComponent } from './components/poll/poll.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { TodayResturantDetailsComponent } from './components/today-resturant-details/today-resturant-details.component';
import { ResturantMenuComponent } from './components/resturant-menu/resturant-menu.component';


@NgModule({
  declarations: [
    HomeComponent,
    PollComponent,
    CountDownComponent,
    TodayResturantDetailsComponent,
    ResturantMenuComponent,
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
export class HomeModule { }
