import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor(
    private loader: LoaderService
  ) { }
  // intercept(request: Observable<any>, next: any): Observable<any> {
  //   this.loader.show();
  //   return next.handle(request).pipe(
  //     finalize(() => {
  //       this.loader.hide();
  //     })
  //   )
  // }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.show();
    return next.handle(request).pipe(
      finalize(() => {
        this.loader.hide();
      })
    );
  }
}
