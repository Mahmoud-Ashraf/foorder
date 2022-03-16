import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()

export class AuthGuard implements CanActivate {
  id: string;
  user: Subscription;
  constructor(
    private router: Router,
  ) { }

  canActivate() {
    // return this.afAuth.authState.pipe(map(auth => {
    //   if (!auth) {
    //     this.router.navigate(['/login']);
    //     return false;
    //   } else {
    //     return true;
    //   }
    // }));
    return true;
  }
}
