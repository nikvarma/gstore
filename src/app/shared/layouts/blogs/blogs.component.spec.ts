import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsComponentLayout } from './blogs.component';

describe('BlogsComponent', () => {
  let component: BlogsComponentLayout;
  let fixture: ComponentFixture<BlogsComponentLayout>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsComponentLayout ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsComponentLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
