import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from '../app/top/top.component';
import { PanelComponent } from './panel/panel.component';
import { AttemptsComponent } from './attempts/attempts.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [AppComponent, TopComponent, PanelComponent, AttemptsComponent, ProgressComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
