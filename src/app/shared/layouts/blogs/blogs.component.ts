import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/pages/pages-store/page-store.state';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponentLayout implements OnInit {
  isCollapsed: boolean;
  constructor(public store: Store<State>) { }
  
  ngOnInit(): void {
  }

  onSizeChange(size: string): void {
    //this.store.dispatch(actionStoreDeviceSize({ deviceSize: DeviceSize[size] }));
  }

}
