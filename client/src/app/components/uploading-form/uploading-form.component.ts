import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-uploading-form',
  templateUrl: './uploading-form.component.html',
  styleUrls: ['./uploading-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadingFormComponent {
  constructor(private formBuilder: FormBuilder) {}

  public filesUploadForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });

  public onUploadFormSubmit(): void {
    // TODO: add form submission
  }
}
