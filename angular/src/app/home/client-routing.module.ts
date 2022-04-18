import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guards';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { ClientComponent } from './client.component';

const routes: Routes = [
  {
    path: '', component: ClientComponent, children: [
      { path: '', component: HomeComponent, canActivate: [AuthGuard]},
      { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
      { path: 'wallet', component: WalletComponent, canActivate: [AuthGuard] },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
