import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResturantsService } from 'src/app/shared/services/resturants.service';
import { HelperService } from 'src/app/shared/services/helper.service';
// import { Interface } from 'readline';

@Component({
  selector: 'app-resturants-details',
  templateUrl: './resturants-details.component.html',
  styleUrls: ['./resturants-details.component.scss']
})
export class ResturantsDetailsComponent implements OnInit, OnDestroy {
  resturants: any;
  currentPage: number = 1;
  totalItems: number;
  perPage: number = 10;
  pagesArr: any;
  filterValue: string;
  getResturantsSub: Subscription
  constructor(
    private resturantsService: ResturantsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getResturants();
  }
  onFilter(e:any) {
    this.currentPage = 1;
    this.filterValue = e;
    this.getResturants(e);
  }
  getResturants(filterValue: string = '') {
    this.getResturantsSub = this.resturantsService.getResturants(this.currentPage, this.perPage, filterValue).subscribe((res: any) => {
      this.resturants = res.resturants;
      this.currentPage = res.currentPage;
      this.perPage = res.perPage;
      this.totalItems = res.totalItems;
    })
  }
  navigate(id: any) {
    this.router.navigate([`resturant/:${id}`]);
  }
  goToPage(pageNo: any) {
    this.currentPage = pageNo;
    this.getResturants(this.filterValue);
  }

  ngOnDestroy(): void {
    this.getResturantsSub?.unsubscribe();
  }

}
