import { AfterContentInit, Component, OnInit } from '@angular/core';
import { User } from './models/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'food-order';
  showAdminBtn = false;
  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
  }

}
