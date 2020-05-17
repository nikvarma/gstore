import { Component, OnInit, ElementRef, QueryList, AfterContentInit, AfterViewInit, ContentChildren, ContentChild, ViewChild, Output, EventEmitter, Input, OnDestroy, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'card-inline-slider',
  templateUrl: './card-inline-slider.component.html',
  styleUrls: ['./card-inline-slider.component.scss']
})
export class CardInlineSliderComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {
  currentItem: any;
  arrowMove: string;
  disabledNext: boolean;
  totalIndexCount: number;
  disabledPrevious: boolean;
  slideContainer: ElementRef;
  currentSelectedIndex: number;
  previousSelectedIndex: number;

  private _maxScrollIndex: number;

  @Input() showSlideIcon: boolean;
  @Input() enableLoopSlide: boolean;
  @Input() showCustomSlideArrow: boolean;
  @Output() onSlideMove: EventEmitter<string>;
  @Output() currentItemIndex: EventEmitter<number>;

  $unsubscribe: Subject<any> = new Subject();
  constructor() { }

  ngOnInit() {
    this.initSlide();
  }

  ngAfterViewInit(): void {

  }

  onSlideChange(position: string): void {
    this.previousSelectedIndex = this.currentSelectedIndex;
    if (position === "next") {
      if (this.currentSelectedIndex < this._maxScrollIndex) {
        this.currentSelectedIndex++;
      }
    } else if (position === "previous") {
      if (this.currentSelectedIndex > 0) {
        this.currentSelectedIndex--;
      }
    }
    this.arrowMove = position;
    this.onSlideMove.emit(position);
    this.currentItemIndex.emit(this.currentSelectedIndex);
    this.enableDisableArrow();
  }

  enableDisableArrow(): void {
    if (this.currentSelectedIndex <= 0) {
      this.disabledPrevious = true;
    } else if (this.currentSelectedIndex >= this._maxScrollIndex) {
      this.disabledNext = true;
    } else {
      this.disabledNext = false;
      this.disabledPrevious = false;
    }
  }

  onSildeIndexChange(currentSelectedIndex: number): void {
    this.currentSelectedIndex = currentSelectedIndex;
    if (this.previousSelectedIndex < currentSelectedIndex) {
      this.onSlideChange('next');
    } else {
      this.onSlideChange('pervious');
    }
  }

  ngAfterContentInit(): void {
    this.enableDisableArrow();
  }

  sliderInit(config: any): void {
    if (config) {
      this.totalIndexCount = config.totalItemCount;
      this._maxScrollIndex = config.maxScrollIndex;
    }
  }

  initSlide(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (typeof this.showCustomSlideArrow === "undefined") {
        this.showCustomSlideArrow = false;
      }
      this.totalIndexCount = 0;
      this.disabledNext = false;
      this._maxScrollIndex = 0;
      this.disabledPrevious = false;
      this.currentSelectedIndex = 0;
      this.previousSelectedIndex = 0;
      this.onSlideMove = new EventEmitter<string>();
      this.currentItemIndex = new EventEmitter<number>();
      resolve(true);
    });
  }

  ngOnDestroy(): void{
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }
}
