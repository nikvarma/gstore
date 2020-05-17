import { Directive, ElementRef, Renderer2, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, fromEvent, Subject, merge } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DeviceSize, DeviceSizeCSSSelector } from 'src/app/models/common-types';


@Directive({
  selector: '[size-detector]'
})
export class SizeDetectorDirective implements OnInit, OnDestroy {
  screenSize: string;
  allEvents$: Observable<any>;
  resizeSubscription$: Subscription;
  loadObservable$: Observable<Event>;
  resizeObservable$: Observable<Event>;
  cssClassList: DeviceSizeCSSSelector;
  unsubscribe$: Subject<any> = new Subject();

  //
  @Output() onSizeChange: EventEmitter<string>;

  //
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {
    this.onSizeChange = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.loadObservable$ = fromEvent(window, 'load');
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.allEvents$ = merge(this.resizeObservable$, this.loadObservable$);
    this.resizeSubscription$ = this.allEvents$.pipe(takeUntil(this.unsubscribe$))
    .subscribe((evt) => {
      let screenWidth: number = (evt && evt.currentTarget && evt.currentTarget.innerWidth)
        ? evt.currentTarget.innerWidth : 0;
      let screenHeight: number = (evt && evt.currentTarget && evt.currentTarget.innerHeight)
      ? evt.currentTarget.innerHeight : 0;
      this.setScreenSize(screenWidth, screenHeight);
    });
  }

  setScreenSize(width: number, height: number): void {
    if (width <= 576) {
      this.screenSize = DeviceSize[DeviceSize.VSMALL];
      this.addScreenSizeCSS(DeviceSize.VSMALL);
    } else if (width <= 767 && width > 576) {
      this.screenSize = DeviceSize[DeviceSize.SMALL];
      this.addScreenSizeCSS(DeviceSize.SMALL);
    } else if (width <= 1175 && width >= 768) {
      this.screenSize = DeviceSize[DeviceSize.MEDIUM];
      this.addScreenSizeCSS(DeviceSize.MEDIUM);
    } else if (width <= 1366 && width > 1175) {
      this.screenSize = DeviceSize[DeviceSize.LARGE];
      this.addScreenSizeCSS(DeviceSize.LARGE);
    } else if (width > 1366) {
      this.screenSize = DeviceSize[DeviceSize.VLARGE];
      this.addScreenSizeCSS(DeviceSize.VLARGE);
    }
  }

  addScreenSizeCSS(size: DeviceSize): void {
    let cssClassName: string;
    switch (size) {
      case DeviceSize.VSMALL:
        cssClassName = DeviceSizeCSSSelector.VSMALL;
        break;
      case DeviceSize.SMALL:
        cssClassName = DeviceSizeCSSSelector.SMALL;
        break;
      case DeviceSize.MEDIUM:
        cssClassName = DeviceSizeCSSSelector.MEDIUM;
        break;
      case DeviceSize.LARGE:
        cssClassName = DeviceSizeCSSSelector.LARGE;
        break;
      case DeviceSize.VLARGE:
        cssClassName = DeviceSizeCSSSelector.VLARGE;
        break;
      default:
        cssClassName = "";
        break;
    }
    Object.keys(DeviceSizeCSSSelector).forEach(className => {
      this.renderer.removeClass(this.eleRef.nativeElement, DeviceSizeCSSSelector[className]);
    });
    this.onSizeChange.emit(this.screenSize);
    this.renderer.addClass(this.eleRef.nativeElement, cssClassName);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
