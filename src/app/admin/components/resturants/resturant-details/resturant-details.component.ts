import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ResturantsService } from 'src/app/shared/services/resturants.service';

@Component({
  selector: 'app-resturant-details',
  templateUrl: './resturant-details.component.html',
  styleUrls: ['./resturant-details.component.scss']
})
export class ResturantDetailsComponent implements OnInit, OnDestroy {
  resturant: any;
  paramsSub: Subscription;
  getResturantSub: Subscription;
  constructor(
    private resturantsService: ResturantsService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.paramsSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.getResturantSub = this.resturantsService.getResturant(params.resturantId).subscribe(res => {
        this.resturant = res;
        console.log(res, this.resturant)
      })
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.getResturantSub?.unsubscribe();
    this.paramsSub?.unsubscribe();
  }
}
