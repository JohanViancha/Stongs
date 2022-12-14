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
    path:'sign-in', 
    loadChildren: ()=> import('./components/sign-in/sign-in.module').then(mod=>mod.SignInModule),
  },
  {
    path:'appStore', 
    loadChildren: ()=> import('./components/app-store/app-store.module').then(mod=>mod.AppStoreModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
