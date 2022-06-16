import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {
  timeLeft$: Observable<any>;
  @Input() endTime: string;
  constructor(public homeService: HomeService) {
    this.timeLeft$ = interval(1000).pipe(
      map(x => this.homeService.calcDateDiff(this.endTime))
    );
  }

  ngOnInit(): void {
  }

}
