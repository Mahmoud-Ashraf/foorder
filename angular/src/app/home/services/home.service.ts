import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public showPollSubject: BehaviorSubject<boolean>;
  public showPoll: Observable<boolean>;
  // voteEnd = [17, 0, 0];
  timeLeft: Observable<any>;
  date = this.calcTime(2);
  constructor() {
    this.showPollSubject = new BehaviorSubject<boolean>(true);
    this.showPoll = this.showPollSubject.asObservable();
  }

  calcDateDiff(endTime = [0, 0, 0]): any {
    const endDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), endTime[0], endTime[1], endTime[2]);
    const dDay = endDate.valueOf();

    const milliSecondsInASecond = 1000;
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const secondsInAMinute = 60;

    // console.log('end date:', dDay, 'from date:', this.calcTime(2).getTime());
    const timeDifference = dDay - this.calcTime(2).getTime();
    // console.log('time diff', timeDifference);
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
      // console.log('days ref', daysToDday);
      return {
        secondsToDday,
        minutesToDday,
        hoursToDday,
        // daysToDday
      };
    } else {
      this.showPollSubject.next(false);
      return {
        secondsToDday: '00',
        minutesToDday: '00',
        hoursToDday: '00',
        // daysToDday: '00'
      };
    }
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


}
