import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCheckoutCartComponent } from './slide-checkout-cart.component';

describe('SlideCheckoutCartComponent', () => {
  let component: SlideCheckoutCartComponent;
  let fixture: ComponentFixture<SlideCheckoutCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideCheckoutCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideCheckoutCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
