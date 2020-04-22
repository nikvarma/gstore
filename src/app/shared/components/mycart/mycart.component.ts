import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/models';
import { NavigationService } from 'src/app/services';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  myCartList: Array<CartItem>;
  @Output() onCheckout: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private navigation: NavigationService) { }

  ngOnInit() {
    this.loadPage();
  }

  loadPage(): void {
    this.myCartList = (!this.myCartList) ? new Array<CartItem>() : this.myCartList;
  }

  checkout(): void {
    this.onCheckout.emit();
    this.navigation.navigate(['store', 'cart', Math.random().toFixed(0), 'checkout']);
  }

}
