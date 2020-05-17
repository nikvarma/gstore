import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../pages-store/page-store.state';
import { Observable, Subject } from 'rxjs';
import { DeviceSize } from 'src/app/models/common-types';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { selectDeviceSize } from '../../pages-store/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit, OnDestroy {
  deviceSize$: Observable<DeviceSize>;
  smallSpanSize: number;
  unsubscribe$: Subject<any> = new Subject();
  constructor(public store: Store<State>, public changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.deviceSize$ = this.store.pipe(distinctUntilChanged(), select(selectDeviceSize));
    this.deviceSize$.pipe(takeUntil(this.unsubscribe$)).subscribe(size => {
      if ((size as number) <= 2) {
        this.smallSpanSize = 24;
      } else {
        this.smallSpanSize = 12;
      }
      this.updateComponent();
    });
  }

  updateComponent(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
