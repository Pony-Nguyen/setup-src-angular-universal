import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsLayoutRoutingModule } from './news-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, NewsLayoutRoutingModule, ComponentsModule],
})
export class NewsModule {}
