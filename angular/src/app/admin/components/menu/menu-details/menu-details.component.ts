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
  @Input() resturantId: string;
  constructor(
    private menuService: MenuService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.getMenu(this.resturantId);
  }
  getMenu(resturantId: string) {
    this.menuService.getMenu(resturantId, this.currentPage, this.perPage).subscribe((res: any) => {
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
        console.log(res);
        // this.getResturants();
        this.navigate(id);
      },
      err => {
        console.log(err);
      },
    );
  }

  // Paginator
  nextPage() {
    this.currentPage++;
    // this.getMenu();
  }
  prevPage() {
    this.currentPage--;
    // this.getMenu();
  }
}
