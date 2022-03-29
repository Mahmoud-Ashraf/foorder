import { RequestsService } from './requests.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private requests: RequestsService
  ) { }

  register(user: any) {
    return this.requests.putApi('auth/signup', user);
  }

  login(user: any) {
    return this.requests.postApi('auth/login', user);
  }

  getAuth() {
  }

  logout(): void {
  }
}
