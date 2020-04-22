import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'addtocart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.scss']
})
export class AddToCartButtonComponent implements OnInit {
  isAddedInCart: boolean;
  sameItemInCartCount: number = 0;
  constructor() { }

  ngOnInit(): void {
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
