import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadingFormComponent } from './uploading-form.component';

describe('UploadingFormComponent', () => {
  let component: UploadingFormComponent;
  let fixture: ComponentFixture<UploadingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
