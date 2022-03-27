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
    // this.requests.getApi('resturants').subscribe(res => console.log(res));
    return this.requests.getApi('resturants');
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
  getEditResturant(id: any) {
    return this.requests.getApi(`edit-resturant/${id}`);
  }
  postEditResturant(updatedResturant: any) {
    return this.requests.postApi(`edit-resturant`, updatedResturant);
  }

  addResturant(resturant: any) {
    return this.requests.postApi('resturant', resturant);
    // .then(res => res.json())
    // .then(resData => console.log(resData))
    // .catch(err => console.log(err));
  }
  postDeleteResturant(resturant: any) {
    return this.requests.postApi('delete-resturant', resturant);
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
