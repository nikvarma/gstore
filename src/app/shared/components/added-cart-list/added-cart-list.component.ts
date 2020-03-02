import { Component, OnInit, Input } from '@angular/core';
import { CartItem, VegStatus, WeightUnit } from 'src/app/models';

@Component({
  selector: 'added-cart-list',
  templateUrl: './added-cart-list.component.html',
  styleUrls: ['./added-cart-list.component.scss']
})
export class AddedCartListComponent implements OnInit {
  @Input() cartList: Array<CartItem>;
  constructor() { }

  ngOnInit() {
    this.loadPage();
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

}
