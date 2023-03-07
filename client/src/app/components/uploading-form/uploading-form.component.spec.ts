import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppModule } from 'src/app/app.module';

import { UploadingFormComponent } from './uploading-form.component';

describe('UploadingFormComponent', () => {
  let component: UploadingFormComponent;
  let fixture: ComponentFixture<UploadingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
      ],
      declarations: [UploadingFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render email input', () => {
    const emailInputElement = fixture.nativeElement.querySelector('input');
    expect(emailInputElement).toBeTruthy();
  });
});
