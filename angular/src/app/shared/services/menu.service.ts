import { Injectable } from '@angular/core';
import { RequestsService } from './requests.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(
    private requests: RequestsService
  ) {}

  getMenu(resturantId: string, page: number = 1, perPage: number = 0) {
    return this.requests.getApi(`menu/${resturantId}?page=${page}&perPage=${perPage}`);
  }

  getMenuItem(id: any) {
    return this.requests.getApi(`menu/${id}`);
  }

  updateMenuItem(id: any, menuItem: any) {
    return this.requests.putApi(`menu/${id}`, menuItem);
  }

  addMenuItem(menuItem: any) {
    return this.requests.postApi('menu', menuItem);
  }
  deleteMenuItem(id: any) {
    return this.requests.deleteApi(`menu/${id}`);
  }
}
