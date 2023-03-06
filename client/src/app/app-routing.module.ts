import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadingFormComponent } from './components/uploading-form/uploading-form.component';

const routes: Routes = [{ path: '', component: UploadingFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
