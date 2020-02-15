import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent implements OnInit {
  @Input() sliderList: Array<{}>;
  @Input() noBorder: boolean;
  constructor() { }

  ngOnInit() {
    
  }

}
