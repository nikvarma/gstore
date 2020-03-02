import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from "@angular/core";
import { FilterTemplate } from "src/app/text-template";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent extends FilterTemplate implements OnInit, OnDestroy {
  public _selfArray = Array;
  constructor() {
    super();
  }

  ngOnInit() {
    this.loadFilters();
  }

  ngOnDestroy() {

  }
}
