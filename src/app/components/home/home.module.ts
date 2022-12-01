import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardTheMostComponent } from 'src/app/shared/atoms/cart-the-most/card-the-most.component';
import { PageTheMostComponent } from 'src/app/shared/pages/page-the-most/page-the-most.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardTheMostComponent,
    PageTheMostComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
