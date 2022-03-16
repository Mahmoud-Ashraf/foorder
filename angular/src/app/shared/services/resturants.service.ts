import { Injectable } from '@angular/core';
import { RequestsService } from './requests.service';

@Injectable({
  providedIn: 'root'
})
export class ResturantsService {

  constructor(
    private requests: RequestsService
  ) {
    this.getResturants();
  }



  getResturants() {
    this.requests.getApi('resturants').subscribe(res => console.log(res));
    // .then(res => {
    //   if (res.status !== 200) {
    //     throw new Error('Faild To Fetch Resturants');
    //   }
    //   return res.json();
    // })
    // .then(resData => console.log('get response', resData))
    // .catch(err => console.log(err));
  }

  addResturant(resturant: any) {
    return this.requests.postApi('resturant', resturant);
    // .then(res => res.json())
    // .then(resData => console.log(resData))
    // .catch(err => console.log(err));
  }

  async getResturantsAsync() {
    const response = await this.requests.getApi('resturants').toPromise();
    console.log(response);
    return response;
  }

  async addResturantAsync(resturant: any) {
    const response = await this.requests.postApi('resturant', resturant).toPromise();
    return response;
  }
}
