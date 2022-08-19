import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [AppModule, ServerModule, ComponentsModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
