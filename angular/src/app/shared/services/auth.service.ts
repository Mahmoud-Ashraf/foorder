import { Router } from '@angular/router';
import { RequestsService } from './requests.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Credintials } from 'src/app/login/models/credintials';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null;
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated = false;
  private loggedUser: any = undefined;
  private loggedUserListener = new Subject();
  private isAdmin = false;
  tokenTimer: any;
  constructor(
    private requests: RequestsService,
    private router: Router
  ) { }
  register(user: Credintials) {
    return this.requests.putApi('auth/signup', user).subscribe((response: any) => {
      const token = response.token;
      this.token = token;
      const loggedUserId = response.user._id;
      if (token) {
        const expiresInDuration = response.expiresIn;
        this.setAuthTimer(expiresInDuration);
        this.isAuthenticated = true;
        this.loggedUser = response.user;
        this.authStatusListener.next(true);
        this.loggedUserListener.next(response.user);
        // this.isAdmin = response.user.isAdmin;
        const expirationDate = new Date(new Date().getTime() + expiresInDuration * 1000);
        console.log(expirationDate);
        this.saveAuthData(token, expirationDate, loggedUserId);
        this.router.navigate(['/home']);
      }
      // console.log('response Token', response.token);
      // localStorage.setItem('token', response.token);
    }
    )
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
      const loggedUserId = response.user._id;
      if (token) {
        const expiresInDuration = response.expiresIn;
        this.setAuthTimer(expiresInDuration);
        this.isAuthenticated = true;
        this.loggedUser = response.user;
        this.authStatusListener.next(true);
        this.loggedUserListener.next(response.user);
        this.isAdmin = response.user.isAdmin;
        const expirationDate = new Date(new Date().getTime() + expiresInDuration * 1000);
        console.log(expirationDate);
        this.saveAuthData(token, expirationDate, loggedUserId);
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

  getUsers(page: number = 1, perPage: number = 0) {
    return this.requests.getApi(`auth/users?page=${page}&perPage=${perPage}`);
  }
  updateUser(userId: any, user: any) {
    return this.requests.putApi(`auth/user/${userId}`, user);
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
  getLoggedUser() {
    return this.loggedUser;
  }

  getIsAdmin() {
    return this.isAdmin;
  }

  getAuthUserListner() {
    return this.loggedUserListener.asObservable();
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
      this.setAuthUser(authInformation.loggedUserId);
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout(): void {
    this.token = null;
    this.isAuthenticated = false;
    this.loggedUser = undefined;
    this.authStatusListener.next(false);
    this.loggedUserListener.next(null);
    clearTimeout(this.tokenTimer);
    // this.clearAuthData();
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }

  private saveAuthData(token: string, expirationDate: Date, loggedUserId?: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    if (loggedUserId) {
      localStorage.setItem('loggedUserId', loggedUserId);
    }
  }

  // private clearAuthData() {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('expiration');
  //   localStorage.removeItem('loggedUserId');
  // }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const loggedUserId = localStorage.getItem('loggedUserId');
    if (!token || !expirationDate || !loggedUserId) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      loggedUserId: loggedUserId
    }
  }

  private setAuthTimer(duration: number) {
    // console.log('setting timer: ' + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private setAuthUser(userId: string) {
    this.requests.getApi(`auth/user/${userId}`).subscribe((user: any) => {
      this.loggedUser = user;
      this.loggedUserListener.next(user);
      this.isAdmin = user.isAdmin;
    })
  }

}
