import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {
  title: string;
  subTitle: string;
  statusCode: number;
  navigateURL: string;
  errorStatusList: Map<string, Array<{}>>;
  constructor() {
    this.errorStatusList = new Map<string, Array<{}>>();
   }

  ngOnInit() {
    this.errorStatusList.set("404", 
      [
        {
          code: 404,
          title: "404",
          subTitle: "Sorry, there is an error on server.",
          navigateURL: "./home"
        }
      ]
    );
    this.errorStatusList.set("500", 
      [
        {
          code: 500,
          title: "500",
          subTitle: "Sorry, there is an error on server.",
          navigateURL: ""
        }
      ]
    );
    this.errorStatusList.set("403", 
      [
        {
          code: 403,
          title: "403",
          subTitle: "Sorry, you are not authorized to access this page.",
          navigateURL: ""
        }
      ]
    );
    this.errorStatusList.set("412", 
      [
        {
          code: 412,
          title: "412",
          subTitle: "There are some problems with your operation",
          navigateURL: ""
        }
      ]
    );
    this.setErrorStatus();
  }

  navigateToPage() {
    
  }

  setErrorStatus(): void {
    this.title = "404";
    this.statusCode = 404;
    this.navigateURL = "";
    this.subTitle = "Sorry, the page you visited does not exist.";
  }

}
