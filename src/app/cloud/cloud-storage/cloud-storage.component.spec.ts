import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudStorageComponent } from './cloud-storage.component';

describe('CloudStorageComponent', () => {
  let component: CloudStorageComponent;
  let fixture: ComponentFixture<CloudStorageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudStorageComponent]
    });
    fixture = TestBed.createComponent(CloudStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
