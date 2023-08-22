import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudSecurityComponent } from './cloud-security.component';

describe('CloudSecurityComponent', () => {
  let component: CloudSecurityComponent;
  let fixture: ComponentFixture<CloudSecurityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudSecurityComponent]
    });
    fixture = TestBed.createComponent(CloudSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
