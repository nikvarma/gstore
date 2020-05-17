import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ProductList } from 'src/app/models';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardProductComponent implements OnInit {
  isAddedInCart: boolean;
  sameItemInCartCount: number = 0;
  @Input() productDetail: ProductList;
  @Input() showSubtitle: boolean = true;
  constructor() { }

  ngOnInit() {
    this.isAddedInCart = false;
  }

  addToCart(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.addSameItem(event);
    this.isAddedInCart = true;
  }

  addSameItem(event: Event): void {
    if (event) {
      this.stopEventPropagation(event);
    }
    this.sameItemInCartCount++;
  }

  removeSameItem(event: Event): void {
    if (event) {
      this.stopEventPropagation(event);
    }
    this.sameItemInCartCount--;
    if (this.sameItemInCartCount <= 0) {
      this.isAddedInCart = false;
    }
  }

  stopEventPropagation(event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
