import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInlineSliderComponent } from './card-inline-slider.component';

describe('CardInlineSliderComponent', () => {
  let component: CardInlineSliderComponent;
  let fixture: ComponentFixture<CardInlineSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInlineSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInlineSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
