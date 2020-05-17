import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { SliderImageItem } from 'src/app/models';
import { Observable, Subject } from 'rxjs';
import { DeviceSize } from 'src/app/models/common-types';
import { Store, select } from '@ngrx/store';
import { State } from '../pages-store/page-store.state';
import { distinctUntilChanged } from 'rxjs/operators';
import { selectDeviceSize } from '../pages-store/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  sliderList: Array<SliderImageItem>;
  deviceSize$: Observable<DeviceSize>;
  unsubscribe$: Subject<any> = new Subject();
  constructor(public store: Store<State>) {
    this.sliderList = new Array<SliderImageItem>();
  }

  ngOnInit() {
    this.deviceSize$ = this.store.pipe(distinctUntilChanged(), select(selectDeviceSize));
    this.sliderList.push({
      id: "0000023",
      imagePath: "assets/product-images/1.jpg"
    },{
      id: "0000023",
      imagePath: "assets/product-images/1.jpg"
    },{
      id: "0000023",
      imagePath: "assets/product-images/1.jpg"
    },{
      id: "0000023",
      imagePath: "assets/product-images/1.jpg"
    },{
      id: "0000023",
      imagePath: "assets/product-images/1.jpg"
    },{
      id: "0000023",
      imagePath: "assets/product-images/1.jpg"
    });
  }

  ngOnDestroy(): void {
    
  }

}
