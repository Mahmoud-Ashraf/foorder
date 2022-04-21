import { ResturantsService } from './../../../../shared/services/resturants.service';
import { MenuService } from './../../../../shared/services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.scss']
})
export class AddMenuItemComponent implements OnInit {
  // menuItem = {
  //   name: '',
  //   price: '',
  //   ingredients: '',
  //   resturantId: ''
  // };
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
    this.menuService.addMenuItem(form.value).subscribe(
      res => {
        console.log(res);
        form.reset();
      },
      err => {
        console.log(err);
        this.errors = err?.error?.errors;
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
