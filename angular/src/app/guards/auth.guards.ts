import { AuthService } from './../shared/services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()

export class AuthGuard implements CanActivate {
  id: string;
  user: Subscription;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const isAuth = this.authService.getIsAuth();
    if (!isAuth) {
      this.router.navigate(['/login']);
    }
    // return this.afAuth.authState.pipe(map(auth => {
    //   if (!auth) {
    //     this.router.navigate(['/login']);
    //     return false;
    //   } else {
    //     return true;
    //   }
    // }));
    return isAuth;
  }
}
