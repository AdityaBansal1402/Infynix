import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NethomeComponent } from './nethome.component';

describe('NethomeComponent', () => {
  let component: NethomeComponent;
  let fixture: ComponentFixture<NethomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NethomeComponent]
    });
    fixture = TestBed.createComponent(NethomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
