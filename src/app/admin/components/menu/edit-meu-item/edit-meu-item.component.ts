import { MenuItem } from './../../../../models/menu-item';
// import { ResturantsService } from './../../../../shared/services/resturants.service';
import { MenuService } from './../../../../shared/services/menu.service';
import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/shared/services/helper.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-meu-item',
  templateUrl: './edit-meu-item.component.html',
  styleUrls: ['./edit-meu-item.component.scss']
})
export class EditMeuItemComponent implements OnInit {
  menuItem: MenuItem = {};
  // menuItem: MenuItem;
  errors: any;
  menuItemId: any;
  // resturants: any;
  constructor(
    private menuService: MenuService,
    // private resturantsService: ResturantsService,
    private helperService: HelperService,
    private activatedRoute: ActivatedRoute,

  ) { 
    
  }

  ngOnInit(): void {
    // this.getResturants();
    this.activatedRoute.params.subscribe((params: Params) => {
      this.menuItemId = params.menuItemId;
      return this.menuService.getMenuItem(this.menuItemId).subscribe((res: MenuItem) => {
        // console.log(this.menuItem);
        this.menuItem = res;
      })
    });
  }

  updateMenuItem(form: any) {
    console.log(form);
    this.menuService.updateMenuItem(this.menuItemId, this.menuItem).subscribe(
      res => {
        form.reset();
        this.helperService.goBack();
      },
      err => {
        console.log(err);
        this.errors = err?.error?.errors;
        console.log('faild response from component', this.errors);
      },
    );
  }

  // getResturants() {
  //   this.resturantsService.getResturants().subscribe((resturants: any) => {
  //     this.resturants = resturants.resturants;
  //   })
  // }

  getIndex(arr: [], fieldName: any) {
    // console.log(arr, fieldName?.name, arr?.findIndex((i: any) => i.param === fieldName.name));
    return arr?.findIndex((i: any) => i.param === fieldName.name);
  }

}
