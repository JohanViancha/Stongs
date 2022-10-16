import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AppStoreComponent } from './app-store.component';

const routes: Routes = [

  {path: '', component: AppStoreComponent, children:[
    { path: 'home', loadChildren: ()=> import('../../components/home/home.module').then(mod=>mod.HomeModule)}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppStoreRoutingModule { }
