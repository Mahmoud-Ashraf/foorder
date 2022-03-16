import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()

export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
  ) { }

  canActivate() {
    return true;
  }
}
