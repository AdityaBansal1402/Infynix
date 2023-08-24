import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingComponent } from './manufacturing.component';

describe('ManufacturingComponent', () => {
  let component: ManufacturingComponent;
  let fixture: ComponentFixture<ManufacturingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufacturingComponent]
    });
    fixture = TestBed.createComponent(ManufacturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
