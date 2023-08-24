import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalmainpageComponent } from './verticalmainpage.component';

describe('VerticalmainpageComponent', () => {
  let component: VerticalmainpageComponent;
  let fixture: ComponentFixture<VerticalmainpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalmainpageComponent]
    });
    fixture = TestBed.createComponent(VerticalmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
