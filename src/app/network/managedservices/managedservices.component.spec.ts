import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedservicesComponent } from './managedservices.component';

describe('ManagedservicesComponent', () => {
  let component: ManagedservicesComponent;
  let fixture: ComponentFixture<ManagedservicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagedservicesComponent]
    });
    fixture = TestBed.createComponent(ManagedservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
