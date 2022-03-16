import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loadersCount = 0;
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public readonly loading = this.loadingSubject.asObservable();
  constructor() { }

  show(): void {
    // this.loadersCount += 1;
    // console.log('loader show', this.loadersCount);
    this.loadingSubject.next(true);
  }

  hide(): void {
    // console.log('loader hide', this.loadersCount);
    // this.loadersCount -= 1;
    // console.log('loader hide2', this.loadersCount);
    // if (this.loadersCount <= 0) {
    this.loadingSubject.next(false);
    // }
  }
}
