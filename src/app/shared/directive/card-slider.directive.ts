import { Directive, ElementRef, OnDestroy, OnInit, AfterViewInit, Output, EventEmitter, Input, OnChanges, SimpleChange, SimpleChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardSlider]'
})
export class CardSliderDirective implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  private _slideWidth: number;
  private _scrollLeft: number;
  private _sliderWidth: number;
  private _currentIndex: number;
  private _maxScrollIndex: number;
  private _sliderElems: HTMLCollection;
  @Input() arrowMove: string;
  @Input() arrowSelectedIndex: number;
  @Output() initSliderConfig: EventEmitter<any>;
  @Output() onSildeIndexChange: EventEmitter<number>;
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {
    this._scrollLeft = 0;
    this._currentIndex = 0;
    this._sliderWidth = 0;
    this._maxScrollIndex = 0;
    this.initSliderConfig = new EventEmitter<any>();
    this.onSildeIndexChange = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.setConfig();
  }

  setConfig(): void {
    if (this.eleRef && this.eleRef.nativeElement) {
      this._sliderElems = this.eleRef.nativeElement.children;
      this._sliderWidth = this.eleRef.nativeElement.clientWidth;
      this._slideWidth = (this._sliderElems) ? this._sliderElems.item(0).clientWidth : 0;
      this._scrollLeft = (this._sliderElems) ? this._sliderElems.item(0).scrollLeft : 0;
      this._maxScrollIndex = Math.round(this._sliderElems.length - (this._sliderWidth/this._slideWidth));
    }
    this.setSliderConfig();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['arrowMove'] && changes['arrowMove'].currentValue) {

    }
    if (changes['arrowSelectedIndex']) {
      if (changes['arrowSelectedIndex'].currentValue >= 0) {
        this._currentIndex = changes['arrowSelectedIndex'].currentValue;
        this.scrollSlide();
      }
    }
  }

  scrollSlide(): void {
    let slideItem: Element;
    if (this._sliderElems && this.arrowSelectedIndex >= 0 && this.arrowSelectedIndex <= this._maxScrollIndex) {
      slideItem = this._sliderElems.item(this.arrowSelectedIndex);
      this.renderer.selectRootElement(this.eleRef).nativeElement.scrollLeft = (this._currentIndex * slideItem.clientWidth);

      // if (this.arrowMove == 'next') {
      //   this.renderer.selectRootElement(this.eleRef).nativeElement.scrollLeft = (this._currentIndex * slideItem.clientWidth);
      // } else if (this.arrowMove == 'previous') {
      //   this.renderer.selectRootElement(this.eleRef).nativeElement.scrollLeft = (this._currentIndex * slideItem.clientWidth);
      // }
    }
  }

  setSliderConfig(): void {
    this.initSliderConfig.emit({
      maxScrollIndex: this._maxScrollIndex,
      totalItemCount: this._sliderElems.length,
    });
  }


  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {

  }
}
