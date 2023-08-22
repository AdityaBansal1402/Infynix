import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdwannetComponent } from './sdwannet.component';

describe('SdwannetComponent', () => {
  let component: SdwannetComponent;
  let fixture: ComponentFixture<SdwannetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SdwannetComponent]
    });
    fixture = TestBed.createComponent(SdwannetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
