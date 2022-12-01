import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalizeRoutingModule } from './personalize-routing.module';
import { PersonalizeComponent } from './personalize.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRegisterPersonalizeComponent } from 'src/app/shared/organisms/form-register-personalize/form-register-personalize.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListPersonalizeComponent } from 'src/app/shared/pages/list-personalize/list-personalize.component';
import { CreatePersonalzeComponent } from 'src/app/shared/pages/create-personalze/create-personalze.component';
import { TableComponent } from 'src/app/shared/molecules/table/table.component';


@NgModule({
  declarations: [
    FormRegisterPersonalizeComponent,
    ListPersonalizeComponent,
    CreatePersonalzeComponent,
    PersonalizeComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    PersonalizeRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PersonalizeModule { }
