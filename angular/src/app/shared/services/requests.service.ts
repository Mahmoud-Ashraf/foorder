import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  // getApi(apiUrl: string) {
  //   return fetch(`${this.baseUrl}/${apiUrl}`);
  // }
  getApi(apiUrl: string) {
    return this.http.get(`${this.baseUrl}/${apiUrl}`);
  }

  postApi(apiUrl: string, data?: any) {
    return this.http.post(`${this.baseUrl}/${apiUrl}`, data);
    // return fetch(`${this.baseUrl}/${apiUrl}`, {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
  }
}
