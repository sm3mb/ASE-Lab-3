import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCaloriesComponent } from './food-calories.component';

describe('FoodCaloriesComponent', () => {
  let component: FoodCaloriesComponent;
  let fixture: ComponentFixture<FoodCaloriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodCaloriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCaloriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});