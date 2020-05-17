import { SizeDetectorDirective } from './size-detector.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('SizeDetectorDirective', () => {
  it('should create an instance', () => {
    let eleRef: ElementRef;
    let renderer: Renderer2;
    const directive = new SizeDetectorDirective(eleRef, renderer);
    expect(directive).toBeTruthy();
  });
});
