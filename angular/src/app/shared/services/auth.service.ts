import { Router } from '@angular/router';
import { RequestsService } from './requests.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from 'src/app/models/User';
import { tap } from 'rxjs/operators';
import { Credintials } from 'src/app/login/models/credintials';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null;
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated = false;
  tokenTimer: any;
  constructor(
    private requests: RequestsService,
    private router: Router
  ) { }
  // userObs = this.user.asObservable();
  // isAuthenticated = false;
  register(user: Credintials) {
    return this.requests.putApi('auth/signup', user)
    // .pipe(tap((resData: any) => {
    //   const expirationDate = new Date(new Date().getTime() + + resData.expiresIn * 1000);
    //   const user = new User(resData.user.name, resData.user.email, resData.user._id, resData.token, expirationDate);
    //   this.user.next(user);
    // }));
  }

  login(user: Credintials) {
    this.requests.postApi('auth/login', user).subscribe((response: any) => {
      const token = response.token;
      this.token = token;
      if (token) {
        const expiresInDuration = response.expiresIn;
        this.setAuthTimer(expiresInDuration);
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
        const expirationDate = new Date(new Date().getTime() + expiresInDuration * 1000);
        console.log(expirationDate);
        this.saveAuthData(token, expirationDate)
        this.router.navigate(['/home']);
      }
      // console.log('response Token', response.token);
      // localStorage.setItem('token', response.token);
    }

    )
    // .pipe(tap((resData: any) => {
    //   console.log('data from auth service', resData);
    //   // this.userObs.subscribe(myUser => {
    //   //   console.log(myUser);
    //   // })
    //   const expirationDate = new Date(new Date().getTime() + + resData.expiresIn * 1000);
    //   const user = new User(resData.user.name, resData.user.email, resData.user._id, resData.token, expirationDate);
    //   this.user.next(user);
    //   // this.isAuthenticated = true;
    //   // this.userObs.subscribe(myUser => {
    //   //   console.log(myUser);
    //   // })
    // }));
  }

  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    const now = new Date();
    if (!authInformation) {
      return
    }
    const expiresIn = (authInformation.expirationDate.getTime() - now.getTime());
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }

  }

  logout(): void {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/login']);
  }

  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate)
    }
  }

  private setAuthTimer(duration: number) {
    console.log('setting timer: ' + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

}
