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

  getTodayOrders(resturantId: string) {
    return this.requests.getApi(`todayOrders/${resturantId}`);
  }

  getCollectedOrders(page: number = 1, perPage: number = 0) {
    return this.requests.getApi(`collected-orders?page=${page}&perPage=${perPage}`);
  }

  getCollectedOrder(collectedOrderId?: string) {
    return this.requests.getApi(`collected-order/${collectedOrderId}`);
  }

  collectOrder(collectedOrder: any) {
    return this.requests.postApi(`collect-order`, collectedOrder);
  }

  checkTodayCollectedOrder() {
    return this.requests.getApi(`checkTodayCollectedOrder`);

  }

  updateCollectedOrder(collectedOrderId: string, collectedOrder: any) {
    return this.requests.putApi(`update-collected-order/${collectedOrderId}`, collectedOrder);
  }

  updateTodayOrder(id: string, order: any) {
    return this.requests.putApi(`updateTodayOrder/${id}`, order);
  }
}
