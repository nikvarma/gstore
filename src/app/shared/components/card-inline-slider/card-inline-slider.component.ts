import { Component, OnInit, ViewChildren, ElementRef, QueryList, AfterContentInit, AfterViewInit, ContentChildren, ContentChild, ViewChild, Output, EventEmitter, Input, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'card-inline-slider',
  templateUrl: './card-inline-slider.component.html',
  styleUrls: ['./card-inline-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardInlineSliderComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {
  currentItem: any;
  slideContainer: ElementRef;
  @Input() showSlideIcon: boolean;
  @Input() enableLoopSlide: boolean;
  @Input() showCustomSlideArrow: boolean;
  @Output() onSlideMove: EventEmitter<string>;
  @Output() currentItemIndex: EventEmitter<number>;
  $unsubscribe: Subject<any> = new Subject();
  constructor() {
    this.onSlideMove = new EventEmitter<string>();
   }

  ngOnInit() {
    this.initSlide();
  }

  ngAfterViewInit(): void {

  }

  onSlideChange(position: string): void {
    this.onSlideMove.emit(position);
  }

  ngAfterContentInit(): void {
    
  }

  initSlide(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (typeof this.showCustomSlideArrow === "undefined") {
        this.showCustomSlideArrow = false;
      }
      this.currentItemIndex = new EventEmitter<number>();
      resolve(true);
    });
  }

  ngOnDestroy(): void{
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }
}