import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ResturantsService } from 'src/app/shared/services/resturants.service';
import { HelperService } from 'src/app/shared/services/helper.service';
// import { Interface } from 'readline';

@Component({
  selector: 'app-resturants-details',
  templateUrl: './resturants-details.component.html',
  styleUrls: ['./resturants-details.component.scss']
})
export class ResturantsDetailsComponent implements OnInit {
  resturants: any;
  currentPage: number = 1;
  totalItems: number;
  perPage: number = 10;
  pagesArr: any;
  filterValue: string;

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
    this.resturantsService.getResturants(this.currentPage, this.perPage, filterValue).subscribe((res: any) => {
      this.resturants = res.resturants;
      this.currentPage = res.currentPage;
      this.perPage = res.perPage;
      this.totalItems = res.totalItems;
      console.log('test pagination', this.resturants);
    })
  }
  navigate(id: any) {
    this.router.navigate([`resturant/:${id}`]);
  }
  // deleteResturant(id: any) {
  //   this.resturantsService.deleteResturant(id).subscribe(
  //     res => {
  //       console.log(res);
  //       this.getResturants();
  //     },
  //     err => {
  //       console.log(err);
  //     },
  //   );
  // }
  goToPage(pageNo: any) {
    this.currentPage = pageNo;
    this.getResturants(this.filterValue);
  }

}
