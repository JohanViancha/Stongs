import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalizeRoutingModule } from './personalize-routing.module';
import { PersonalizeComponent } from './personalize.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRegisterPersonalizeComponent } from 'src/app/shared/organisms/form-register-personalize/form-register-personalize.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FormRegisterPersonalizeComponent,
    PersonalizeComponent
  ],
  imports: [
    CommonModule,
    PersonalizeRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PersonalizeModule { }
