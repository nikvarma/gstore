import { CardSliderDirective } from './card-slider.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('CardSliderDirective', () => {
  it('should create an instance', () => {
    let rend: Renderer2;
    let eleRef: ElementRef;
    const directive = new CardSliderDirective(eleRef, rend);
    expect(directive).toBeTruthy();
  });
});
