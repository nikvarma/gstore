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
  @Input() private productDetail: ProductList;
  constructor() { }

  ngOnInit() {
    this.isAddedInCart = false;
  }

  addToCart(event: Event): void {
    event.stopPropagation();
    this.addSameItem();
    this.isAddedInCart = true;
  }

  addSameItem(): void {
    this.sameItemInCartCount++;
  }

  removeSameItem(): void {
    this.sameItemInCartCount--;
    if (this.sameItemInCartCount <= 0) {
      this.isAddedInCart = false;
    }
  }

}
