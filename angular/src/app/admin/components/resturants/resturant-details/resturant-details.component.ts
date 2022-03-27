import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ResturantsService } from 'src/app/shared/services/resturants.service';

@Component({
  selector: 'app-resturant-details',
  templateUrl: './resturant-details.component.html',
  styleUrls: ['./resturant-details.component.scss']
})
export class ResturantDetailsComponent implements OnInit {
  resturant: any;
  constructor(
    private resturantsService: ResturantsService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.params.subscribe((params: Params) => {
      // console.log(params);
      return this.resturantsService.getResturant(params.resturantId).subscribe(res => {
        this.resturant = res;
        console.log(res, this.resturant)
      })
      // console.log('params', params);
    });
  }

  ngOnInit(): void {
    // // this.getResturant()
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   // console.log('params', params);
    // });
    // this.activatedRoute.params.pipe(concatMap((params: { id: any; }) => {
    //   return this.resturantsService.getResturant(params.id)
    // })).subscribe(res =>{
    //   this.resturant = res;
    // });
  }

  // getResturant(id: any) {
  //   this.resturantsService.getResturant(id).subscribe(res => {
  //     this.resturant = res;
  //     console.log(this.resturant);
  //   })
  // }
}
