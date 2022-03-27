import { ResturantsService } from 'src/app/shared/services/resturants.service';
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
  resturants: any;

  constructor(
    private resturantsService: ResturantsService
  ) {
  }

  ngOnInit(): void {
    this.getResturants();
  }

  getMenuSections(id: string | undefined) {
  }
  getResturants() {
    this.resturantsService.getResturants().subscribe(res => {
      this.resturants = res;
      console.log(this.resturants);
    })
  }

}
