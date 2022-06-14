import { MenuService } from './shared/services/menu.service';
import { AuthService } from './shared/services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { QuicklinkModule } from 'ngx-quicklink';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkInterceptor } from './shared/interceptors/network.interceptor';
import { LoaderService } from './shared/services/loader.service';
import { RequestsService } from './shared/services/requests.service';
import { ResturantsService } from './shared/services/resturants.service';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuicklinkModule,
    SharedModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
