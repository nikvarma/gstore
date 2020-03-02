import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  myCartList: Array<CartItem>;
  constructor() { }

  ngOnInit() {
    this.loadPage();
  }

  loadPage(): void {
    this.myCartList = (!this.myCartList) ? new Array<CartItem>() : this.myCartList;
  }

  checkout(): void {

  }

}
