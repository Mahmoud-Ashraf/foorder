import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  timeLeft: Observable<any>;
  date = this.calcTime(2);
  disableResturantDetails = new Subject<boolean>();
  constructor() { }

  calcDateDiff(endTime = [0, 0, 0]): any {
    const milliSecondsInASecond = 1000;
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const secondsInAMinute = 60;
    const timeDifference = this.calcDateDiffInMs(endTime);
    if (timeDifference > 0) {
      // const daysToDday = Math.floor(
      //   timeDifference /
      //   (milliSecondsInASecond * minutesInAnHour * secondsInAMinute * hoursInADay)
      // );
      let hoursToDday: any = Math.floor(
        (timeDifference / (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) % hoursInADay
      );
      if (hoursToDday < 10) {
        hoursToDday = '0' + hoursToDday;
      }
      let minutesToDday: any = Math.floor(
        (timeDifference / (milliSecondsInASecond * minutesInAnHour)) % secondsInAMinute
      );
      if (minutesToDday < 10) {
        minutesToDday = '0' + minutesToDday;
      }
      let secondsToDday: any =
        Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;
      if (secondsToDday < 10) {
        secondsToDday = '0' + secondsToDday;
      }
      return {
        secondsToDday,
        minutesToDday,
        hoursToDday,
        // daysToDday
      };
    } else {
      // this.showPollSubject.next(false);
      return {
        secondsToDday: '00',
        minutesToDday: '00',
        hoursToDday: '00',
        // daysToDday: '00'
      };
    }
  }

  calcDateDiffInMs(endTime = [0, 0, 0]) {
    const endDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), endTime[0], endTime[1], endTime[2]);
    const dDay = endDate.valueOf();
    const timeDifference = dDay - this.calcTime(2).getTime();
    return timeDifference;
  }

  calcTime(offset: any): Date {
    // create Date object for current location
    const d = new Date();
    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    // create new Date object for different city
    // using supplied offset
    const nd = new Date(utc + (3600000 * offset));
    // return new adjusted date
    return nd;
  }

  getDisableResturantDetails() {
    return this.disableResturantDetails.asObservable();
  }


}
