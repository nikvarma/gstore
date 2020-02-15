import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutiselectGroupDropdownComponent } from './mutiselect-group-dropdown.component';

describe('MutiselectGroupDropdownComponent', () => {
  let component: MutiselectGroupDropdownComponent;
  let fixture: ComponentFixture<MutiselectGroupDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutiselectGroupDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutiselectGroupDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
