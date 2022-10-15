import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavComponent } from 'src/app/shared/organisms/nav/nav.component';
import { HeaderComponent } from 'src/app/shared/organisms/header/header.component';
import { FooterComponent } from 'src/app/shared/molecules/footer/footer.component';
import { SectionHomeTheMostComponent } from 'src/app/shared/organisms/section-home-the-most/section-home-the-most.component';
import { CarouselTheMostComponent } from 'src/app/shared/molecules/carousel-the-most/carousel-the-most.component';
import { CartTheMostComponent } from 'src/app/shared/atoms/cart-the-most/cart-the-most.component';
import { PageTheMostComponent } from 'src/app/shared/pages/page-the-most/page-the-most.component';


@NgModule({
  declarations: [HomeComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    SectionHomeTheMostComponent,
    CarouselTheMostComponent,
    CartTheMostComponent,
    PageTheMostComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
