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
  ]
})
export class SharedModule { }
