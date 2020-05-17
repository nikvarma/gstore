import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../pages-store/page-store.state';

@Component({
  selector: 'app-recipes-layout',
  templateUrl: './recipes-layout.component.html',
  styleUrls: ['./recipes-layout.component.scss']
})
export class RecipesLayoutComponent implements OnInit {
  isCollapsed: boolean;
  constructor(public store: Store<State>) { }

  ngOnInit(): void {
  }

  onSizeChange(size: string): void {
    //this.store.dispatch(actionStoreDeviceSize({ deviceSize: DeviceSize[size] }));
  }
}
