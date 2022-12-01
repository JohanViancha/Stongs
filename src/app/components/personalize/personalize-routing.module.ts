import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonalzeComponent } from 'src/app/shared/pages/create-personalze/create-personalze.component';
import { ListPersonalizeComponent } from 'src/app/shared/pages/list-personalize/list-personalize.component';
import { PersonalizeComponent } from './personalize.component';


const routes: Routes = [

  {path: '', redirectTo:'listPersonalize', pathMatch:'full'},
  {path: 'listPersonalize', component: ListPersonalizeComponent},
  {path: 'createPersonalize', component: CreatePersonalzeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalizeRoutingModule { }
