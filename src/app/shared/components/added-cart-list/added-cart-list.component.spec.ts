import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedCartListComponent } from './added-cart-list.component';

describe('AddedCartListComponent', () => {
  let component: AddedCartListComponent;
  let fixture: ComponentFixture<AddedCartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedCartListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedCartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
