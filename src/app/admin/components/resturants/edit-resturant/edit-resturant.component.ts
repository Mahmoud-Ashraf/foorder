import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ResturantsService } from 'src/app/shared/services/resturants.service';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-edit-resturant',
  templateUrl: './edit-resturant.component.html',
  styleUrls: ['./edit-resturant.component.scss']
})
export class EditResturantComponent implements OnInit, OnDestroy {
  resturant: any = {
    name: '',
    type: '',
    phone: '',
    savedPhone: '',
    elmenusUrl: ''
  };
  errors: any;
  resturantId: any;
  paramsSub: Subscription;
  getResturantSub: Subscription;
  updateResturantSub: Subscription;
  @ViewChild('editResturantForm') editResturantForm: any;
  constructor(
    private resturantsService: ResturantsService,
    private activatedRoute: ActivatedRoute,
    private helperService: HelperService
  ) {
    this.paramsSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.resturantId = params.resturantId;
      this.getResturantSub = this.resturantsService.getResturant(this.resturantId).subscribe(res => {
        console.log(this.resturant);
        this.resturant = res;
      })
    });
  }

  ngOnInit(): void {

  }

  updateResturant(form: any) {
    console.log(form);
    this.updateResturantSub = this.resturantsService.updateResturant(this.resturantId, this.resturant).subscribe(
      res => {
        form.reset();
        this.helperService.goBack();
      },
      err => {
        // console.log('err', err);
        this.errors = err.error.errors;
        // console.log('faild response from component', this.errors);
      }
    );
  }

  getIndex(arr: [], fieldName: any) {
    // console.log(arr, fieldName?.name, arr?.findIndex((i: any) => i.param === fieldName.name));
    return arr?.findIndex((i: any) => i.param === fieldName.name);
  }

  ngOnDestroy(): void {
    this.paramsSub?.unsubscribe();
    this.getResturantSub?.unsubscribe();
    this.updateResturantSub?.unsubscribe();
  }
}
