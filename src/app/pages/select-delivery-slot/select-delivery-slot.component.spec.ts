import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDeliverySlotComponent } from './select-delivery-slot.component';

describe('SelectDeliverySlotComponent', () => {
  let component: SelectDeliverySlotComponent;
  let fixture: ComponentFixture<SelectDeliverySlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDeliverySlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDeliverySlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
