import { Subscription } from 'rxjs';
import { ResturantsService } from './../../../../shared/services/resturants.service';
import { MenuService } from './../../../../shared/services/menu.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.scss']
})
export class AddMenuItemComponent implements OnInit, OnDestroy {
  addMenuSub: Subscription;
  getResturantsSub: Subscription;
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
    this.addMenuSub = this.menuService.addMenuItem(form.value).subscribe(
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
    this.getResturantsSub = this.resturantsService.getResturants().subscribe((resturants: any) => {
      this.resturants = resturants.resturants;
    })
  }

  getIndex(arr: [], fieldName: any) {
    // console.log(arr, fieldName?.name, arr?.findIndex((i: any) => i.param === fieldName.name));
    return arr?.findIndex((i: any) => i.param === fieldName.name);
  }

  ngOnDestroy(): void {
    this.addMenuSub?.unsubscribe();
    this.getResturantsSub?.unsubscribe();
  }
}
