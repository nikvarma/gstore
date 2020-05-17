import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesLayoutComponent } from './recipes-layout.component';

describe('RecipesLayoutComponent', () => {
  let component: RecipesLayoutComponent;
  let fixture: ComponentFixture<RecipesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
