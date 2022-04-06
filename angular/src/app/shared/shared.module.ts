import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule } from 'ngx-quicklink';
import { WalletComponent } from './components/wallet/wallet.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './services/loader.service';
import { RequestsService } from './services/requests.service';
import { ResturantsService } from './services/resturants.service';
import { AuthService } from './services/auth.service';
import { MenuService } from './services/menu.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkInterceptor } from './interceptors/network.interceptor';
import { AuthInterceptor } from '../login/interceptors/auth.interceptor';




@NgModule({
  declarations: [
    WalletComponent,
    ProfileComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    QuicklinkModule,
    FormsModule,
  ],
  exports: [
    QuicklinkModule,
    WalletComponent,
    ProfileComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    FormsModule,
    LoaderComponent
  ],
  providers: [LoaderService, RequestsService, ResturantsService, MenuService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
})
export class SharedModule { }
