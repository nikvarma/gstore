import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-payment-mode',
  templateUrl: './payment-mode.component.html',
  styleUrls: ['./payment-mode.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentModeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
