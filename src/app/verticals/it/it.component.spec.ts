import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItComponent } from './it.component';

describe('ItComponent', () => {
  let component: ItComponent;
  let fixture: ComponentFixture<ItComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItComponent]
    });
    fixture = TestBed.createComponent(ItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
