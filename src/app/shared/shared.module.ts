import { NgModule } from '@angular/core';
import { ErrorFormReactivePipe } from 'src/app/shared/util/pipes/error-form-reactive.pipe';
import { FormRegisterPersonalizeComponent } from './organisms/form-register-personalize/form-register-personalize.component';


@NgModule({
  declarations: [
    ErrorFormReactivePipe
  ],
  exports: [
    ErrorFormReactivePipe
  ]
})
export class SharedModule { }
