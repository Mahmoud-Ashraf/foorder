import { ResturantsService } from 'src/app/shared/services/resturants.service';
import { MenuService } from './../../../../shared/services/menu.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent implements OnInit {
  resturantMenu: any;
  currentPage: number = 1;
  totalItems: number;
  perPage: number = 4;
  @Input() filterValue: string;
  resturants: any;
  selectedResturantId: string = '';
  @Input() resturantId: string;
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
      console.log('test pagination', this.resturantMenu);
    })
  }
  navigate(id: any) {
    this.router.navigate([`resturant/${id}`]);
  }
  deleteMenuItem(id: any) {
    this.menuService.deleteMenuItem(id).subscribe(
      res => {
        // console.log(res);
        this.getMenu(this.filterValue);
        // this.getResturants();
        // this.navigate(id);
      },
      err => {
        console.log(err);
      },
    );
  }

  // Paginator
  // nextPage() {
  //   this.currentPage++;
  //   // this.getMenu();
  // }
  // prevPage() {
  //   this.currentPage--;
  //   // this.getMenu();
  // }
  goToPage(pageNo: any) {
    this.currentPage = pageNo;
    this.getMenu(this.filterValue);
  }
  getResturants() {
    this.resturantsService.getResturants().subscribe((resturants: any) => {
      this.resturants = resturants.resturants;
    })
  }

  filterMenuByResturant() {
    this.filterValue = '';
    this.getMenu();
  }
}
