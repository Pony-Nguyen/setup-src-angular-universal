import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { BodyComponent } from './common/body/body.component';
import { ContentComponent } from './common/content/content.component';
import { SliderComponent } from './common/slider/slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BodyBottomComponent } from './common/body-bottom/body-bottom.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotifyComponent } from './popup/notify/notify.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ContentComponent,
    SliderComponent,
    BodyBottomComponent,
    NotifyComponent,
  ],
  imports: [CommonModule, CarouselModule, RouterModule, ReactiveFormsModule],
  exports: [HeaderComponent, FooterComponent],
})
export class ComponentsModule {}
