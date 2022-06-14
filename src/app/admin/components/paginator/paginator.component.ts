import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() currentPage: number;
  @Input() perPage: number;
  @Input() totalItems: number;
  @Output() pageChange: EventEmitter<any> = new EventEmitter();
  pagesArr: any;
  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(pageNo: any) {
    this.currentPage = pageNo;
    this.pageChange.emit(this.currentPage);
  }

  ngOnChanges() {
    this.pagesArr = new Array(Math.ceil(this.totalItems/this.perPage)).fill(1).map((x, i) => i+1);
  }

}
