import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from 'src/app/shared/organisms/nav/nav.component';
import { HeaderComponent } from 'src/app/shared/organisms/header/header.component';
import { FooterComponent } from 'src/app/shared/molecules/footer/footer.component';
import { AppStoreRoutingModule } from './app-store-routing.module';
import { AppStoreComponent } from './app-store.component';



@NgModule({
  declarations: [
    AppStoreComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppStoreRoutingModule
  ]
})
export class AppStoreModule { }
