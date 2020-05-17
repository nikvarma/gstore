import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderStatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
