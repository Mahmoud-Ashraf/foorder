import { Injectable } from '@angular/core';
import { RequestsService } from './requests.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private requests: RequestsService
  ) {
  }



  getOrders(page: number = 1, perPage: number = 0) {
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
  getOrdersPerUser(userId: string) {
    return this.requests.getApi(`userOrders/${userId}`);
    // .then(res => {
    //   if (res.status !== 200) {
    //     throw new Error('Faild To Fetch Resturants');
    //   }
    //   return res.json();
    // })
    // .then(resData => console.log('get response', resData))
    // .catch(err => console.log(err));
  }
  getOrder(id: any) {
    return this.requests.getApi(`resturant/${id}`);
  }

  // updateResturant(id: any, resturant: any) {
  //   return this.requests.putApi(`resturant/${id}`, resturant);
  // }

  addOrder(order: any) {
    return this.requests.postApi('order', order);
  }
  // deleteResturant(id: any) {
  //   return this.requests.deleteApi(`resturant/${id}`);
  // }

  getTodayOrders() {
    return this.requests.getApi('todayOrders');
  }
}
