import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudHostedAppComponent } from './cloud-hosted-app.component';

describe('CloudHostedAppComponent', () => {
  let component: CloudHostedAppComponent;
  let fixture: ComponentFixture<CloudHostedAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudHostedAppComponent]
    });
    fixture = TestBed.createComponent(CloudHostedAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
