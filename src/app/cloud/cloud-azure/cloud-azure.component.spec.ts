import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudAzureComponent } from './cloud-azure.component';

describe('CloudAzureComponent', () => {
  let component: CloudAzureComponent;
  let fixture: ComponentFixture<CloudAzureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudAzureComponent]
    });
    fixture = TestBed.createComponent(CloudAzureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
