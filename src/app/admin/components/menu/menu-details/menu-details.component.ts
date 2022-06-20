import { Subscription } from 'rxjs';
import { ResturantsService } from 'src/app/shared/services/resturants.service';
import { MenuService } from './../../../../shared/services/menu.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent implements OnInit, OnDestroy {
  resturantMenu: any;
  currentPage: number = 1;
  totalItems: number;
  perPage: number = 10;
  @Input() filterValue: string;
  resturants: any;
  selectedResturantId: string = '';
  @Input() resturantId: string;
  getMenuSub: Subscription;
  deleteMenuItemSub: Subscription;
  getResturantsSub: Subscription;
  constructor(
    private menuService: MenuService,
    private resturantsService: ResturantsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getResturants();
    this.getMenu();
  }

  onFilter(e:any) {
    this.currentPage = 1;
    this.filterValue = e;
    this.getMenu(e);
  }

  getMenu(filterValue: string = '') {
    this.menuService.getMenu(this.selectedResturantId, this.currentPage, this.perPage, filterValue).subscribe((res: any) => {
      this.resturantMenu = res.menu;
      this.currentPage = res.currentPage;
      this.perPage = res.perPage;
      this.totalItems = res.totalItems;
    })
  }
  navigate(id: any) {
    this.router.navigate([`resturant/${id}`]);
  }
  deleteMenuItem(id: any) {
    this.deleteMenuItemSub = this.menuService.deleteMenuItem(id).subscribe(
      res => {
        this.getMenu(this.filterValue);
      },
      err => {
        console.log(err);
      },
    );
  }

  goToPage(pageNo: any) {
    this.currentPage = pageNo;
    this.getMenu(this.filterValue);
  }
  getResturants() {
    this.getResturantsSub = this.resturantsService.getResturants().subscribe((resturants: any) => {
      this.resturants = resturants.resturants;
    })
  }

  filterMenuByResturant() {
    this.filterValue = '';
    this.currentPage = 1;
    this.getMenu();
  }

  ngOnDestroy(): void {
    this.getMenuSub?.unsubscribe();
    this.deleteMenuItemSub?.unsubscribe();
    this.getResturantsSub?.unsubscribe();
  }
}
