import { AdminGuard } from './guards/admin.guards';
// import { ProfileComponent } from './home/components/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AuthGuard } from './guards/auth.guards';
// import { CartComponent } from './home/components/cart/cart.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
// import { WalletComponent } from './home/components/wallet/wallet.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard, AdminGuard] },
  { path: 'home', loadChildren: () => import('./home/client.module').then(m => m.ClientModule), canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { preloadingStrategy: QuicklinkStrategy })
  ],
  exports: [RouterModule],
  providers: [AuthGuard, AdminGuard]
})

export class AppRoutingModule { }
