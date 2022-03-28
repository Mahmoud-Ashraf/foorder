import { RequestsService } from './requests.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private requests: RequestsService
  ) { }

  login() {
  }

  register(user: any) {
    return this.requests.putApi('auth/signup', user);
  }

  getAuth() {
  }

  logout(): void {
  }
}
