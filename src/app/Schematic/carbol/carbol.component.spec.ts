import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbolComponent } from './carbol.component';

describe('CarbolComponent', () => {
  let component: CarbolComponent;
  let fixture: ComponentFixture<CarbolComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
