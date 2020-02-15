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
  menuMode: string = "horizontal";
  menuList: Array<MenuList> = new Array<MenuList>();
  constructor() {}

  ngOnInit() {
    this.currLocation = "New York";
    this.menuList.push({
      label: "Grocery & Staples",
      text: "Grocery & Staples",
      id: ""
    });
    this.menuList.push({
      label: "Vegetables & Fruits",
      text: "Vegetables & Fruits",
      id: ""
    });
    this.menuList.push({
      label: "Personal Care",
      text: "Personal Care",
      id: ""
    });
    this.menuList.push({
      label: "Household Items",
      text: "Household Items",
      id: ""
    });
    this.menuList.push({
      label: "Home & Kitchen",
      text: "Home & Kitchen",
      id: ""
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
  }
}
