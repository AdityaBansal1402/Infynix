import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudMainComponent } from './cloud-main.component';

describe('CloudMainComponent', () => {
  let component: CloudMainComponent;
  let fixture: ComponentFixture<CloudMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudMainComponent]
    });
    fixture = TestBed.createComponent(CloudMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
