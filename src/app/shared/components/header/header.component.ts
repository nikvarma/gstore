import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from "@angular/core";
import { MenuList } from "src/app/models/menu-list";
import { DeviceSize } from 'src/app/models/common-types';
import { Observable, Subject } from 'rxjs';
import { State } from 'src/app/pages/pages-store/page-store.state';
import { Store, select } from '@ngrx/store';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { selectDeviceSize } from 'src/app/pages/pages-store/common';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {
  currLocation: string;
  showMyCart: boolean;
  modalTitle: string;
  showMenu: boolean;
  totalCartItems: number = 0;
  totalCartItemsText: string;
  authModalIsVisible: boolean;
  isOkLoading: boolean = false;
  menuMode: string = "horizontal";
  deviceSize$: Observable<DeviceSize>;
  onLoadMatchMenuToUrl: boolean = true;
  unsubscribe$: Subject<any> = new Subject();
  menuList: Array<MenuList> = new Array<MenuList>();
  menuMoreList: Array<MenuList> = new Array<MenuList>();
  constructor(public store: Store<State>, public changeDetectorRef: ChangeDetectorRef) {
    this.showMenu = false;
    this.showMyCart = false;
  }

  openCart(): void {
    this.showMyCart = !this.showMyCart;
  }

  handleOk() {

  }

  openMenu(): void {
    this.showMenu = !this.showMenu;
  }

  updateComponent(): void {
    this.changeDetectorRef.detectChanges();
  }

  logout(event: Event): void {

  }

  ngOnInit() {
    this.deviceSize$ = this.store.pipe(distinctUntilChanged(), select(selectDeviceSize));
    this.deviceSize$.pipe(takeUntil(this.unsubscribe$)).subscribe(size => {
      this.updateComponent();
    });
    this.currLocation = "New York";

    this.menuList.push({
      id: "1",
      url: "grocery-and-staples",
      label: "Grocery & Staples",
      text: "Grocery & Staples"
    });
    this.menuList.push({
      id: "2",
      url: "vegetables-and-fruits",
      label: "Vegetables & Fruits",
      text: "Vegetables & Fruits"
    });
    this.menuList.push({
      id: "3",
      url: "personal-care",
      label: "Personal Care",
      text: "Personal Care"
    });
    this.menuList.push({
      id: "4",
      url: "household-items",
      label: "Household Items",
      text: "Household Items"
    });
    this.menuList.push({
      id: "5",
      url: "home-and-kitchen",
      label: "Home & Kitchen",
      text: "Home & Kitchen"
    });
    // this.menuList.push({
    //   label: "Biscuits, Snacks & Chocolates",
    //   text: "Biscuits, Snacks & Chocolates",
    //   id: ""
    //  });
    // this.menuList.push({
    //   label: "Beverages",
    //   text: "Beverages",
    //   id: ""
    // });
    // this.menuList.push({
    //   label: "Breakfast & Dairy",
    //   text: "Breakfast & Dairy",
    //   id: ""
    // });
    // this.menuList.push({
    //   label: "Grofers Exclusive",
    //   text: "Grofers Exclusive",
    //   id: ""
    // });
    // this.menuList.push({
    //   label: "Noodles, Sauces & Instant Food",
    //   text: "Noodles, Sauces & Instant Food",
    //   id: ""
    // });
    // this.menuList.push({
    //   label: "Furnishing & Home Needs",
    //   text: "Furnishing & Home Needs",
    //   id: ""
    // });
    // this.menuList.push({
    //   label: "Fresh & Frozen Food",
    //   text: "Fresh & Frozen Food",
    //   id: ""
    // });
    // this.menuList.push({
    //   label: "Baby & Kids",
    //   text: "Baby & Kids",
    //   id: ""
    // });
    // this.menuList.push({
    //   label: "Pet Care",
    //   text: "Pet Care",
    //   id: ""
    // });
    // this.menuList.push({
    //   label: "Fashion",
    //   text: "Fashion",
    //   id: ""
    // });
    this.totalCartItemsText = (this.totalCartItems > 0) ? `${this.totalCartItems} Items` : `${this.totalCartItems} Item`;
  }

  handleCancel(): void {

  }

  ngOnDestroy(): void {
    
  }
}
