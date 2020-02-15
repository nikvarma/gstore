import { CardSliderDirective } from './card-slider.directive';
import { ElementRef } from '@angular/core';

describe('CardSliderDirective', () => {
  it('should create an instance', () => {
    let eleRef: ElementRef;
    const directive = new CardSliderDirective(eleRef);
    expect(directive).toBeTruthy();
  });
});
