import { Subscription } from 'rxjs';
import { MenuItem } from './../../../../models/menu-item';
// import { ResturantsService } from './../../../../shared/services/resturants.service';
import { MenuService } from './../../../../shared/services/menu.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HelperService } from 'src/app/shared/services/helper.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-meu-item',
  templateUrl: './edit-meu-item.component.html',
  styleUrls: ['./edit-meu-item.component.scss']
})
export class EditMeuItemComponent implements OnInit, OnDestroy {
  menuItem: MenuItem = {};
  errors: any;
  menuItemId: any;
  paramsSub: Subscription;
  getMenuItemSub: Subscription;
  updateMenuItemSub: Subscription;
  constructor(
    private menuService: MenuService,
    private helperService: HelperService,
    private activatedRoute: ActivatedRoute,

  ) { 
    
  }

  ngOnInit(): void {
    this.paramsSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.menuItemId = params.menuItemId;
      this.getMenuItemSub = this.menuService.getMenuItem(this.menuItemId).subscribe((res: MenuItem) => {
        this.menuItem = res;
      })
    });
  }

  updateMenuItem(form: any) {
    console.log(form);
    this.updateMenuItemSub = this.menuService.updateMenuItem(this.menuItemId, this.menuItem).subscribe(
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

  getIndex(arr: [], fieldName: any) {
    // console.log(arr, fieldName?.name, arr?.findIndex((i: any) => i.param === fieldName.name));
    return arr?.findIndex((i: any) => i.param === fieldName.name);
  }

  ngOnDestroy(): void {
    this.paramsSub?.unsubscribe();
    this.getMenuItemSub?.unsubscribe();
    this.updateMenuItemSub?.unsubscribe();
  }
}
