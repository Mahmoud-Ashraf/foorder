import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent implements OnInit {
  @Input() filterValue: string;
  @Output() onFilter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  filter() {
    this.onFilter.emit(this.filterValue);
  }

}
