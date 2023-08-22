import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformativeComponent } from './transformative.component';

describe('TransformativeComponent', () => {
  let component: TransformativeComponent;
  let fixture: ComponentFixture<TransformativeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransformativeComponent]
    });
    fixture = TestBed.createComponent(TransformativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
