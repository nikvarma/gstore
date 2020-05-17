import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  navigationLink: Array<{}>;
  categoriesLinks: Array<{}>;
  topNavigationLinks: Array<{}>;
  footerNavigationlinks: Array<{}>;
  dashboardUserLinks: Array<{}> = [];
  onLoadMatchMenuToUrl: boolean = true;
  constructor() { 
    this.navigationLink = new Array<{}>();
    this.categoriesLinks = new Array<{}>();
    this.topNavigationLinks = new Array<{}>();
    this.footerNavigationlinks = new Array<{}>();
  }

  ngOnInit() {
    this.setCategoryLinks();
    this.setDashboardLinks();
    this.setTopNavigationLinks();
    this.setFooterNavigationLinks();
    this.navigationLink.push(...this.topNavigationLinks);
    this.navigationLink.push({
      label: "Categories",
      icon: "apartment",
      defaultOpen: false,
      subMenus: [...this.categoriesLinks]
    });
    this.navigationLink.push({
      label: "Profile",
      icon: "solution",
      defaultOpen: false,
      subMenus: [...this.dashboardUserLinks]
    });
    this.navigationLink.push(...this.footerNavigationlinks);
  }

  setTopNavigationLinks(): void {
    this.topNavigationLinks.push({
      icon: "home",
      link: "home",
      label: "Home"
    });
  }

  setFooterNavigationLinks(): void {
    this.footerNavigationlinks.push({
      icon: "customer-service",
      link: "support",
      label: "Support"
    });
    this.footerNavigationlinks.push({
      icon: "contacts",
      link: "contact-us",
      label: "Contact Us"
    });
    this.footerNavigationlinks.push({
      icon: "info-circle",
      link: "about-us",
      label: "About Us"
    });
  }

  setCategoryLinks(): void {
    this.categoriesLinks.push({
        link: "grocery-and-staples",
        label: "Grocery & Staples"
    });
    this.categoriesLinks.push({
      link: "vegetables-and-fruits",
      label: "Vegetables & Fruits"
    });
  }

  setDashboardLinks(): void {
    this.dashboardUserLinks.push({
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
    }, {
      order: 4,
      selected: false,
      icon: "logout",
      link: "logout",
      label: "Logout"
    });
  }
}
