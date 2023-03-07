import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-uploading-form',
  templateUrl: './uploading-form.component.html',
  styleUrls: ['./uploading-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadingFormComponent {
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
