import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudsecurityComponent } from './cloudsecurity.component';

describe('CloudsecurityComponent', () => {
  let component: CloudsecurityComponent;
  let fixture: ComponentFixture<CloudsecurityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudsecurityComponent]
    });
    fixture = TestBed.createComponent(CloudsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
