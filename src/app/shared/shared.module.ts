import { NgModule } from '@angular/core';
import { ErrorFormReactivePipe } from 'src/app/shared/util/pipes/error-form-reactive.pipe';
import { FormRegisterPersonalizeComponent } from './organisms/form-register-personalize/form-register-personalize.component';
import { ListPersonalizeComponent } from './pages/list-personalize/list-personalize.component';


@NgModule({
  declarations: [
    ErrorFormReactivePipe,
    ListPersonalizeComponent
  ],
  exports: [
    ErrorFormReactivePipe
  ]
})
export class SharedModule { }
