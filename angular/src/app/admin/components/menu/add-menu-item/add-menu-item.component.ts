import { ResturantsService } from './../../../../shared/services/resturants.service';
import { MenuService } from './../../../../shared/services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.scss']
})
export class AddMenuItemComponent implements OnInit {
  menuItem = {
    name: undefined,
    price: undefined,
    resturantId: undefined,
    count: 0
  };
  errors: any;
  resturants: any;
  constructor(
    private menuService: MenuService,
    private resturantsService: ResturantsService
    ) { }

  ngOnInit(): void {
    this.getResturants();
  }

  addMenuItem(form: any) {
    console.log(form);
    this.menuService.addMenuItem(this.menuItem).subscribe(
      res => {
        this.errors = undefined;
        console.log('success response from component', res);
        // this.error = undefined;
        this.menuItem = {
          name: undefined,
          price: undefined,
          resturantId: undefined,
          count: 0
        };
      },
      err => {
        this.errors = err.error.errors;
        console.log('faild response from component', this.errors);
      },
    );
  }

  getResturants() {
    this.resturantsService.getResturants().subscribe((resturants: any) => {
      this.resturants = resturants.resturants;
    })
  }

  getIndex(arr: [], fieldName: any) {
    // console.log(arr, fieldName?.name, arr?.findIndex((i: any) => i.param === fieldName.name));
    return arr?.findIndex((i: any) => i.param === fieldName.name);
  }
}
