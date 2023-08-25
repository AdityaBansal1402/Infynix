import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialComponent } from './residential.component';

describe('ResidentialComponent', () => {
  let component: ResidentialComponent;
  let fixture: ComponentFixture<ResidentialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentialComponent]
    });
    fixture = TestBed.createComponent(ResidentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
