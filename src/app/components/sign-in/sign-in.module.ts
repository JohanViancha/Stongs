import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';
import { FormSignInComponent } from 'src/app/shared/organisms/form-sign-in/form-sign-in.component';
import { ErrorFormReactivePipe } from 'src/app/shared/util/pipes/error-form-reactive.pipe';


@NgModule({
  declarations: [
    SignInComponent,
    FormSignInComponent,
    ErrorFormReactivePipe,
  ],
  imports: [
    CommonModule,
    SignInRoutingModule,
    ReactiveFormsModule 
  ]
})
export class SignInModule { }
