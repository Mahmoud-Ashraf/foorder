import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ResturantsService } from '../shared/services/resturants.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  resturant = {
    name: '',
    content: ''
  };
  errors: any;
  constructor(private resturantsService: ResturantsService) { }

  ngOnInit(): void {

  }

  addResturant(form: any) {
    console.log(form);
    this.resturantsService.addResturant(this.resturant).subscribe(
      res => {
        this.errors = undefined;
        console.log('success response from component', res);
        // this.error = undefined;
        this.resturant = {
          name: '',
          content: ''
        };
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
