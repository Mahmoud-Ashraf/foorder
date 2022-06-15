import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private location: Location) { }
  goBack(): void {
    this.location.back();
  }

  calculateValueFromPerc(perc: number, total: number) {
    return perc*total/100;
  }

  generateUserAvatar(userName: string) {
    let avatar = '';
    if(userName) {
      let splitedName = userName.split(' ');
      splitedName.forEach(namePhrase => {
          avatar += namePhrase[0];
      });
    }
    return avatar;
  }
}
