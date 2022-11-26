import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalizeRoutingModule } from './personalize-routing.module';
import { PersonalizeComponent } from './personalize.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonalizeComponent
  ],
  imports: [
    CommonModule,
    PersonalizeRoutingModule,
    ReactiveFormsModule
  ]
})
export class PersonalizeModule { }
