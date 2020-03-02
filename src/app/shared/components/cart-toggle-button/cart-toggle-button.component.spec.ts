import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartToggleButtonComponent } from './cart-toggle-button.component';

describe('CartToggleButtonComponent', () => {
  let component: CartToggleButtonComponent;
  let fixture: ComponentFixture<CartToggleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartToggleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
