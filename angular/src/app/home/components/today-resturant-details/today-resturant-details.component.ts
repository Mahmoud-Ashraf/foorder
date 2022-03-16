import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuSection } from 'src/app/models/menu-section';
import { Resturant } from 'src/app/models/resturant';


@Component({
  selector: 'app-today-resturant-details',
  templateUrl: './today-resturant-details.component.html',
  styleUrls: ['./today-resturant-details.component.scss']
})
export class TodayResturantDetailsComponent implements OnInit {
  toDayResturant$: Observable<Resturant>;
  resturantId: string | undefined;
  menuSections: MenuSection[];

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  getMenuSections(id: string | undefined) {
  }

}
