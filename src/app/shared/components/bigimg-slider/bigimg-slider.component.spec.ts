import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigimgSliderComponent } from './bigimg-slider.component';

describe('BigimgSliderComponent', () => {
  let component: BigimgSliderComponent;
  let fixture: ComponentFixture<BigimgSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigimgSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigimgSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
