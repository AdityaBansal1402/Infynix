import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalityComponent } from './hospitality.component';

describe('HospitalityComponent', () => {
  let component: HospitalityComponent;
  let fixture: ComponentFixture<HospitalityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalityComponent]
    });
    fixture = TestBed.createComponent(HospitalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
