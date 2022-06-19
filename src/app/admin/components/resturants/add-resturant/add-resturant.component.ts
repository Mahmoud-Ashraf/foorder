import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantsService } from '../../../../shared/services/resturants.service';

@Component({
  selector: 'app-add-resturant',
  templateUrl: './add-resturant.component.html',
  styleUrls: ['./add-resturant.component.scss']
})
export class AddResturantComponent implements OnInit, OnDestroy {
  addResturantSub: Subscription
  errors: any;
  constructor(
    private resturantsService: ResturantsService,
  ) { }

  ngOnInit(): void {

  }

  addResturant(form: any) {
    console.log(form);
    this.addResturantSub = this.resturantsService.addResturant(form.value).subscribe(
      res => {
        form.reset();
      },
      err => {
        this.errors = err.error.errors;
        console.log('faild response from component', this.errors);
      },
    );
  }

  getIndex(arr: [], fieldName: any) {
    // console.log(arr, fieldName?.name, arr?.findIndex((i: any) => i.param === fieldName.name));
    return arr?.findIndex((i: any) => i.param === fieldName.name);
  }

  ngOnDestroy(): void {
    this.addResturantSub?.unsubscribe();
  }
}
