import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import { DisplayPosition } from "../../lib";
import { NzCarouselComponent } from "ng-zorro-antd/carousel";
import { SliderImageItem } from 'src/app/models';

@Component({
  selector: "bigimg-slider",
  templateUrl: "./bigimg-slider.component.html",
  styleUrls: ["./bigimg-slider.component.scss"]
})
export class BigimgSliderComponent implements OnInit, AfterViewInit {
  @Input() autoPlay: boolean;
  @Input() autoPlaySpeed: number;
  @Input() dotPosition: DisplayPosition;
  @Input() sliderList: Array<SliderImageItem>;
  @ViewChild(NzCarouselComponent, { static: true })
  carousel: NzCarouselComponent;
  constructor() {}

  ngOnInit() {
    this.loadSettings();
  }

  ngAfterViewInit(): void {
    console.log(this.carousel);
  }

  loadSettings(): void {}

  afterSlideChange(event: any): void {}

  beforeSlideChange(event: any): void {}
}
