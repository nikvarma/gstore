import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() imageList: Array<{}>;
  @Input() sizing: {
    width?: number,
    height?: number,
    minHeight?: number,
    minWidth?: number
  };
  @Input() playSpeed: number;
  constructor() { }

  ngOnInit() {
    this.checkSetSetting();
  }

  checkSetSetting(): void {
    if (this.sizing) {

    } else {
      this.sizing = {

      }
    }
    if (!this.playSpeed) {
      this.playSpeed = 3000;
    }
  }

}
