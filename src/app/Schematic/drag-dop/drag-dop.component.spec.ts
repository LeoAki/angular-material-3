import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DragDopComponent } from './drag-dop.component';

describe('DragDopComponent', () => {
  let component: DragDopComponent;
  let fixture: ComponentFixture<DragDopComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
