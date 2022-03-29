import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  baseUrl = environment.apiUrl;
  token: any;
  constructor(private http: HttpClient) { }

  // getApi(apiUrl: string) {
  //   return fetch(`${this.baseUrl}/${apiUrl}`);
  // }
  getApi(apiUrl: string) {
    this.getToken();
    return this.http.get(`${this.baseUrl}/${apiUrl}`, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }

  postApi(apiUrl: string, data?: any) {
    this.getToken();
    return this.http.post(`${this.baseUrl}/${apiUrl}`, data, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
    // return fetch(`${this.baseUrl}/${apiUrl}`, {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
  }
  putApi(apiUrl: string, data?: any) {
    this.getToken();
    console.log('request service', apiUrl, data);
    return this.http.put(`${this.baseUrl}/${apiUrl}`, data, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }

  deleteApi(apiUrl: any) {
    this.getToken();
    return this.http.delete(`${this.baseUrl}/${apiUrl}`, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }

  getToken() {
    this.token = localStorage.getItem('token');
  }
}
