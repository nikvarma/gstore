import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appCardSlider]'
})
export class CardSliderDirective implements OnInit, OnDestroy {

  constructor(private eleRef: ElementRef) {
  }

  ngOnInit(): void {
    console.log(this.eleRef);
  }

  ngOnDestroy(): void {

  }
}
