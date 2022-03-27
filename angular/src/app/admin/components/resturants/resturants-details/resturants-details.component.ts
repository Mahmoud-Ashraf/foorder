import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ResturantsService } from 'src/app/shared/services/resturants.service';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-resturants-details',
  templateUrl: './resturants-details.component.html',
  styleUrls: ['./resturants-details.component.scss']
})
export class ResturantsDetailsComponent implements OnInit {
  resturants: any;

  constructor(
    private resturantsService: ResturantsService,
    private router: Router,
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.getResturants()
  }
  getResturants() {
    this.resturantsService.getResturants().subscribe(res => {
      this.resturants = res;
      console.log(this.resturants);
    })
  }
  navigate(id: any) {
    this.router.navigate([`resturant/:${id}`]);
  }
  deleteResturant(resturant: any) {
    // console.log(form);
    this.resturantsService.postDeleteResturant(resturant).subscribe(
      res => {
        console.log(res);
        this.helperService.goBack();
      },
      err => {
        console.log(err);
      },
    );
  }

}
