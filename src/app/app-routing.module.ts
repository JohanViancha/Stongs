import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginModule } from './components/login/login.module';

const routes: Routes = [
  {
    path:'',  redirectTo:'/login', pathMatch:'full'},
  {
    path:'login', 
    loadChildren: ()=> import('./components/login/login.module').then(mod=>mod.LoginModule),
  },
  {
    path:'home', 
    loadChildren: ()=> import('./components/home/home.module').then(mod=>mod.HomeModule),
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
