import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DeviceSize } from 'src/app/models/common-types';
import { Store, select } from '@ngrx/store';
import { State } from '../../pages-store/page-store.state';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { selectDeviceSize } from '../../pages-store/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnDestroy {
  dashboardLinks: Array<{}> = [];
  deviceSize$: Observable<DeviceSize>;
  onLoadMatchMenuToUrl: boolean = true;
  unsubscribe$: Subject<any> = new Subject();
  constructor(public store: Store<State>, public changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.setDashboardLinks();
    this.deviceSize$ = this.store.pipe(distinctUntilChanged(), select(selectDeviceSize));
    this.deviceSize$.pipe(takeUntil(this.unsubscribe$)).subscribe(size => {
      console.log(size);
      this.updateComponent();
    });
  }

  setDashboardLinks(): void {
    this.dashboardLinks.push({
      icon: "user",
      order: 0,
      selected: true,
      link: "profile",
      label: "My Profile"
    },{
      order: 1,
      selected: false,
      icon: "setting",
      link: "settings",
      label: "Settings"
    },{
      order: 2,
      selected: false,
      icon: "heart",
      link: "wishlist",
      label: "Wish List"
    },{
      order: 3,
      selected: false,
      icon: "solution",
      link: "orders",
      label: "Order List"
    },{
      order: 4,
      selected: false,
      icon: "hourglass",
      link: "order-status",
      label: "Order Status"
    });
  }

  logout(event: Event): void {
    
  }

  updateComponent(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
