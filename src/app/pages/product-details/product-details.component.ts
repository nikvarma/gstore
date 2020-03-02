import { Component, OnInit } from '@angular/core';
import { SliderImageItem } from 'src/app/models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  sliderList: Array<SliderImageItem>;
  constructor() { 
    this.sliderList = new Array<SliderImageItem>();
  }

  ngOnInit() {
    this.sliderList.push({
      id: "0000023",
      imagePath: "assets/product-images/1.jpg"
    },{
      id: "0000023",
      imagePath: "assets/product-images/1.jpg"
    },{
      id: "0000023",
      imagePath: "assets/product-images/1.jpg"
    },{
      id: "0000023",
      imagePath: "assets/product-images/1.jpg"
    },{
      id: "0000023",
      imagePath: "assets/product-images/1.jpg"
    },{
      id: "0000023",
      imagePath: "assets/product-images/1.jpg"
    });
  }

}
