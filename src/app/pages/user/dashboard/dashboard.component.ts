import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardLinks: Array<{}> = [];
  onLoadMatchMenuToUrl: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.setDashboardLinks();
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

}
