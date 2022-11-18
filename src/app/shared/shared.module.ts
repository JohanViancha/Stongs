import { NgModule } from '@angular/core';
import { ErrorFormReactivePipe } from 'src/app/shared/util/pipes/error-form-reactive.pipe';


@NgModule({
  declarations: [
    ErrorFormReactivePipe
  ],
  exports: [
    ErrorFormReactivePipe
  ]
})
export class SharedModule { }
