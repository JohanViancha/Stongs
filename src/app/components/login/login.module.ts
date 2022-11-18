import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ButtonSignGoogleComponent } from 'src/app/shared/atoms/button-sign-google/button-sign-google.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormLoginComponent } from 'src/app/shared/organisms/form-login/form-login.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent,
    ButtonSignGoogleComponent,
    
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LoginModule { }
