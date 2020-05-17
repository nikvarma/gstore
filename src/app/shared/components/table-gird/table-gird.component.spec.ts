import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGirdComponent } from './table-gird.component';

describe('TableGirdComponent', () => {
  let component: TableGirdComponent;
  let fixture: ComponentFixture<TableGirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableGirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
