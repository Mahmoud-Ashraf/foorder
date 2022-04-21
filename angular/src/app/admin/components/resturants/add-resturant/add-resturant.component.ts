import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantsService } from '../../../../shared/services/resturants.service';

@Component({
  selector: 'app-add-resturant',
  templateUrl: './add-resturant.component.html',
  styleUrls: ['./add-resturant.component.scss']
})
export class AddResturantComponent implements OnInit {
  // resturant = {
  //   name: '',
  //   type: '',
  //   phone: '',
  //   savedPhone: '',
  //   elmenusUrl: ''
  // };
  errors: any;
  constructor(
    private resturantsService: ResturantsService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  addResturant(form: any) {
    console.log(form);
    this.resturantsService.addResturant(form.value).subscribe(
      res => {
        form.reset();
        this.router.navigate(['admin/resturants']);
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
}
