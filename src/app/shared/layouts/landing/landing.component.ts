import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/pages/pages-store/page-store.state';
import { DeviceSize } from 'src/app/models/common-types';
import { actionDeviceSize } from 'src/app/pages/pages-store/common';
import { MetaTagService } from '../../lib';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {
  
  constructor(public store: Store<State>, public changeDetectorRef: ChangeDetectorRef, public metaService: MetaTagService) { }

  ngOnInit() {
    this.metaService.commonMetaTag();
  }

  onSizeChange(size: string): void {
    this.store.dispatch(actionDeviceSize({ deviceSize: DeviceSize[size] }));
    this.updateComponent();
  }

  updateComponent(): void {
    this.changeDetectorRef.detectChanges();
  }
}
// if (window.matchMedia("(orientation: portrait)").matches) {
//   // you're in PORTRAIT mode
// }

// if (window.matchMedia("(orientation: landscape)").matches) {
//   // you're in LANDSCAPE mode
// }