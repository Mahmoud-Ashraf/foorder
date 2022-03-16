import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlashMessagesModule } from 'flash-messages-angular';
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
    FlashMessagesModule.forRoot(),
    HttpClientModule

  ],
  providers: [LoaderService, RequestsService, ResturantsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
