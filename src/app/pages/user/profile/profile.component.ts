import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DeviceSize } from 'src/app/models/common-types';
import { Store, select } from '@ngrx/store';
import { State } from '../../pages-store/page-store.state';
import { distinctUntilChanged } from 'rxjs/operators';
import { selectDeviceSize } from '../../pages-store/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit, OnDestroy {
  deviceSize$: Observable<DeviceSize>;
  unsubscribe$: Subject<any> = new Subject();
  constructor(public store: Store<State>) { }

  ngOnInit() {
    this.deviceSize$ = this.store.pipe(distinctUntilChanged(), select(selectDeviceSize));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
