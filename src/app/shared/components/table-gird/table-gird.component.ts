import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-table-gird',
  templateUrl: './table-gird.component.html',
  styleUrls: ['./table-gird.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableGirdComponent implements OnInit {

  total = 1;
  listOfRandomUser: [] = [];
  loading = true;
  pageSize = 10;
  pageIndex = 1;
  filterGender = [];
  constructor() { }

  ngOnInit(): void {
  }

  onQueryParamsChange(params: any): void {
    console.log(params);
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find(item => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;
    this.listOfRandomUser = [];
    //this.loadDataFromServer(pageIndex, pageSize, sortField, sortOrder, filter);
  }
}
