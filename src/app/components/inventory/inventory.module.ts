import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { TableComponent } from 'src/app/shared/molecules/table/table.component';
import { InventoryComponent } from './inventory.component';


@NgModule({
  declarations: [
    InventoryComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
