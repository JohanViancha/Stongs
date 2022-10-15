import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavComponent } from 'src/app/shared/organisms/nav/nav.component';
import { HeaderComponent } from 'src/app/shared/organisms/header/header.component';
import { FooterComponent } from 'src/app/shared/molecules/footer/footer.component';


@NgModule({
  declarations: [HomeComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
