import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkingComponent } from './coworking.component';

describe('CoworkingComponent', () => {
  let component: CoworkingComponent;
  let fixture: ComponentFixture<CoworkingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoworkingComponent]
    });
    fixture = TestBed.createComponent(CoworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
