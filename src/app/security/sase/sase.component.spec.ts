import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaseComponent } from './sase.component';

describe('SaseComponent', () => {
  let component: SaseComponent;
  let fixture: ComponentFixture<SaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaseComponent]
    });
    fixture = TestBed.createComponent(SaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
