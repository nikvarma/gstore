import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ProductList, WeightUnit, VegStatus } from 'src/app/models';
import { Store, select } from '@ngrx/store';
import { State } from '../pages-store/page-store.state';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DeviceSize } from 'src/app/models/common-types';
import { selectDeviceSize } from '../pages-store/common';
import { MetaTagService } from 'src/app/shared/lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  productCategory: Array<{}>;
  imageBannerList: Array<{}>;
  showSlideIcon: boolean;
  productList: Array<ProductList>;
  deviceType$: Observable<DeviceSize>;
  $unsubscribe: Subject<any> = new Subject();
  constructor(public store: Store<State>, public metaService: MetaTagService) {
    this.productList = [];
    this.productCategory = new Array<{}>();
    this.imageBannerList = new Array<{}>();
  }

  ngOnInit() {
    this.loadData();
    this.deviceType$ = this.store.pipe(select(selectDeviceSize));
    this.deviceType$.pipe(takeUntil(this.$unsubscribe)).subscribe((val => {
      if (DeviceSize[val] === DeviceSize[DeviceSize.VLARGE] || 
        DeviceSize[val] === DeviceSize[DeviceSize.LARGE] ||
        DeviceSize[val] === DeviceSize[DeviceSize.MEDIUM]) {
          this.showSlideIcon = true;
      } else {
        this.showSlideIcon = false;
      }
    }));
    this.metaService.homeMetaTag();
  }

  loadData(): void {
    this.imageBannerList.push({
      src: "assets/slider1.jpg"
    });
    this.imageBannerList.push({
      src: "assets/slider2.jpg"
    });

    this.productCategory.push({
      id: "1",
      title: "Fruits & Vegetables",
      subtitle: "150 Items",
      image: "assets/product-icons/1.jpg"
    });
    this.productCategory.push({
      id: "2",
      title: "Grocery & Staples",
      subtitle: "95 Items",
      image: "assets/product-icons/2.jpg"
    });
    this.productCategory.push({
      id: "3",
      title: "Beverages",
      subtitle: "65 Items",
      image: "assets/product-icons/5.jpg"
    });
    this.productCategory.push({
      id: "4",
      title: "Home & Kitchen",
      subtitle: "965 Items",
      image: "assets/product-icons/4.jpg"
    });
    this.productCategory.push({
      id: "5",
      title: "Furnishing & Home Needs",
      subtitle: "125 Items",
      image: "assets/product-icons/3.jpg"
    });
    this.productCategory.push({
      id: "6",
      title: "Household Needs",
      subtitle: "325 Items",
      image: "assets/product-icons/6.jpg"
    });
    this.productCategory.push({
      id: "7",
      title: "Personal Care",
      subtitle: "156 Items",
      image: "assets/product-icons/7.jpg"
    });
    this.productCategory.push({
      id: "8",
      title: "Breakfast & Dairy",
      subtitle: "857 Items",
      image: "assets/product-icons/8.jpg"
    });
    this.productCategory.push({
      id: "9",
      title: "Biscuits, Snacks & Chocolates",
      subtitle: "48 Items",
      image: "assets/product-icons/9.jpg"
    });
    this.productCategory.push({
      id: "10",
      title: "Noodles, Sauces & Instant Food",
      subtitle: "156 Items",
      image: "assets/product-icons/10.jpg"
    });
    this.productCategory.push({
      id: "11",
      title: "Pet Care",
      subtitle: "568 Items",
      image: "assets/product-icons/11.jpg"
    });
    this.productCategory.push({
      id: "12",
      title: "Meats, Frozen & Seafood",
      subtitle: "156 Items",
      image: "assets/product-icons/12.jpg"
    });

    this.productList.push({
      actualPrice: 450.99,
      currencyType: 'IN',
      discountInPer: 50,
      id: "1",
      images: [],
      weight: 500,
      productSrc: "Site Record",
      subCategory: 'fresh-fruits',
      title: "Product Title Here",
      subTitle: "Product Sub Title Here",
      vegStatus: VegStatus.Veg.toString(),
      thumbnail: "assets/product-images/1.jpg",
      weightUnit: WeightUnit.Gm.toString().toLocaleLowerCase()
    });
    this.productList.push({
      actualPrice: 450.99,
      currencyType: 'IN',
      discountInPer: 50,
      id: "2",
      images: [],
      weight: 500,
      productSrc: "Site Record",
      subCategory: 'fresh-fruits',
      title: "Product Title Here",
      subTitle: "Product Sub Title Here",
      vegStatus: VegStatus.NonVeg.toString(),
      thumbnail: "assets/product-images/1.jpg",
      weightUnit: WeightUnit.Gm.toString().toLocaleLowerCase()
    });
    this.productList.push({
      actualPrice: 450.99,
      currencyType: 'IN',
      discountInPer: 50,
      id: "3",
      images: [],
      weight: 500,
      productSrc: "Site Record",
      subCategory: 'fresh-fruits',
      title: "Product Title Here",
      subTitle: "Product Sub Title Here",
      vegStatus: VegStatus.VegNonVeg.toString(),
      thumbnail: "assets/product-images/1.jpg",
      weightUnit: WeightUnit.Gm.toString().toLocaleLowerCase()
    });
    this.productList.push({
      actualPrice: 450.99,
      currencyType: 'IN',
      discountInPer: 50,
      id: "4",
      images: [],
      weight: 500,
      productSrc: "Site Record",
      subCategory: 'fresh-fruits',
      title: "Product Title Here",
      subTitle: "Product Sub Title Here",
      vegStatus: VegStatus.Veg.toString(),
      thumbnail: "assets/product-images/1.jpg",
      weightUnit: WeightUnit.Gm.toString().toLocaleLowerCase()
    });
    this.productList.push({
      actualPrice: 450.99,
      currencyType: 'IN',
      discountInPer: 50,
      id: "5",
      images: [],
      weight: 500,
      productSrc: "Site Record",
      subCategory: 'fresh-fruits',
      title: "Product Title Here",
      subTitle: "Product Sub Title Here",
      vegStatus: VegStatus.Veg.toString(),
      thumbnail: "assets/product-images/1.jpg",
      weightUnit: WeightUnit.Gm.toString().toLocaleLowerCase()
    });
    this.productList.push({
      actualPrice: 450.99,
      currencyType: 'IN',
      discountInPer: 50,
      id: "6",
      images: [],
      weight: 500,
      productSrc: "Site Record",
      subCategory: 'fresh-fruits',
      title: "Product Title Here",
      subTitle: "Product Sub Title Here",
      vegStatus: VegStatus.NonVeg.toString(),
      thumbnail: "assets/product-images/1.jpg",
      weightUnit: WeightUnit.Gm.toString().toLocaleLowerCase()
    });
    this.productList.push({
      actualPrice: 450.99,
      currencyType: 'IN',
      discountInPer: 50,
      id: "7",
      images: [],
      weight: 500,
      productSrc: "Site Record",
      subCategory: 'fresh-fruits',
      title: "Product Title Here",
      subTitle: "Product Sub Title Here",
      vegStatus: VegStatus.Veg.toString(),
      thumbnail: "assets/product-images/1.jpg",
      weightUnit: WeightUnit.Gm.toString().toLocaleLowerCase()
    });
  }

  ngOnDestroy(): void {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }
}