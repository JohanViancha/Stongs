import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppStoreComponent } from './app-store.component';

const routes: Routes = [

  {path: '', component: AppStoreComponent, 
    children:[
      { path: 'home', loadChildren: ()=> import('../../components/home/home.module').then(mod=>mod.HomeModule)},
      { path: 'myOrders', loadChildren: ()=> import('../../components/my-orders/my-orders.module').then(mod=>mod.HomeModule)} ,
      { path: 'inventory', loadChildren: ()=> import('../../components/inventory/inventory.module').then(mod=>mod.InventoryModule)},
      { path: 'personalize', loadChildren: ()=> import('../../components/personalize/personalize.module').then(mod=>mod.PersonalizeModule)} 
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppStoreRoutingModule { }
