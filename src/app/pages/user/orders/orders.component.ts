import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { DeviceSize } from 'src/app/models/common-types';
import { Subject, Observable } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { State } from '../../pages-store/page-store.state';
import { selectDeviceSize } from '../../pages-store/common';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent implements OnInit, OnDestroy {

  deviceSize$: Observable<DeviceSize>;
  spanSize: string;
  unsubscribe$: Subject<any> = new Subject();

  constructor(private store: Store<State>) { }

  

  ngOnInit() {
    this.deviceSize$ = this.store.pipe(distinctUntilChanged(), select(selectDeviceSize));
    this.deviceSize$.pipe(takeUntil(this.unsubscribe$)).subscribe(res => {});
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
