import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { MenuList } from "src/app/models/menu-list";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  currLocation: string;
  showMyCart: boolean;
  modalTitle: string;
  totalCartItems: number = 0;
  totalCartItemsText: string;
  authModalIsVisible: boolean;
  isOkLoading: boolean = false;
  menuMode: string = "horizontal";
  onLoadMatchMenuToUrl: boolean = true;
  menuList: Array<MenuList> = new Array<MenuList>();
  menuMoreList: Array<MenuList> = new Array<MenuList>();
  constructor() {
    this.showMyCart = false;
  }

  openCart(): void {
    this.showMyCart = !this.showMyCart;
  }

  handleOk() {

  }

  ngOnInit() {    
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
}
