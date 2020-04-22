import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.scss']
})
export class UserLandingComponent implements OnInit {
  isCollapsed: boolean;
  constructor() { }
  
  ngOnInit() {
    this.isCollapsed = false;
  }

}
