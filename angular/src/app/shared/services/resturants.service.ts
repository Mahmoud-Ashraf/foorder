import { Injectable } from '@angular/core';
import { RequestsService } from './requests.service';

@Injectable({
  providedIn: 'root'
})
export class ResturantsService {

  constructor(
    private requests: RequestsService
  ) {
  }



  getResturants(page: number = 1, perPage: number = 0) {
    return this.requests.getApi(`resturants?page=${page}&perPage=${perPage}`);
    // .then(res => {
    //   if (res.status !== 200) {
    //     throw new Error('Faild To Fetch Resturants');
    //   }
    //   return res.json();
    // })
    // .then(resData => console.log('get response', resData))
    // .catch(err => console.log(err));
  }
  getResturant(id: any) {
    return this.requests.getApi(`resturant/${id}`);
  }

  updateResturant(id: any, resturant: any) {
    return this.requests.putApi(`resturant/${id}`, resturant);
  }

  addResturant(resturant: any) {
    return this.requests.postApi('resturant', resturant);
  }
  deleteResturant(id: any) {
    return this.requests.deleteApi(`resturant/${id}`);
  }

  // async getResturantsAsync() {
  //   const response = await this.requests.getApi('resturants').toPromise();
  //   console.log(response);
  //   return response;
  // }

  // async addResturantAsync(resturant: any) {
  //   const response = await this.requests.postApi('resturant', resturant).toPromise();
  //   return response;
  // }
}
