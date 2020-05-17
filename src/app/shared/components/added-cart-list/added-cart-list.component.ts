import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CartItem, VegStatus, WeightUnit } from 'src/app/models';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/pages/pages-store/page-store.state';
import { Observable, Subject } from 'rxjs';
import { DeviceSize } from 'src/app/models/common-types';
import { distinctUntilChanged } from 'rxjs/operators';
import { selectDeviceSize } from 'src/app/pages/pages-store/common';

@Component({
  selector: 'added-cart-list',
  templateUrl: './added-cart-list.component.html',
  styleUrls: ['./added-cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddedCartListComponent implements OnInit, OnDestroy {
  @Input() cartList: Array<CartItem>;
  deviceSize$: Observable<DeviceSize>;
  unsubscribe$: Subject<any>;
  constructor(public store: Store<State>) { }

  ngOnInit() {
    this.unsubscribe$ = new Subject();
    this.loadPage();
    this.deviceSize$ = this.store.pipe(distinctUntilChanged() ,select(selectDeviceSize));
  }

  loadPage() {
    this.cartList = (!this.cartList) ? new Array<CartItem>() : this.cartList;
    this.cartList.push({
      actualPrice: 450.99,
      currencyType: 'IN',
      discountInPer: 50,
      id: "001",
      images: [],
      weight: 500,
      productSrc: "Site Record",
      subCategory: 'fresh-fruits',
      title: "Product Title Here",
      subTitle: "Product Sub Title Here",
      vegStatus: VegStatus.Veg.toString(),
      thumbnail: "assets/product-images/1.jpg",
      weightUnit: WeightUnit.Gm.toString().toLocaleLowerCase(),
      totalItem: 3
    });
    this.cartList.push({
      actualPrice: 450.99,
      currencyType: 'IN',
      discountInPer: 50,
      id: "002",
      images: [],
      weight: 500,
      productSrc: "Site Record",
      subCategory: 'fresh-fruits',
      title: "Product Title Here",
      subTitle: "Product Sub Title Here",
      vegStatus: VegStatus.Veg.toString(),
      thumbnail: "assets/product-images/1.jpg",
      weightUnit: WeightUnit.Gm.toString().toLocaleLowerCase(),
      totalItem: 3
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
