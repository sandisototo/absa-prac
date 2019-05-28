import * as $ from 'jquery';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutes } from '@app/app.routing';
import { AppComponent } from '@app/app.component';
import { CoreModule, } from '@app/core/core.module';
import { SharedModule } from '@app/shared';
import { NotifierModule } from 'angular-notifier';
import { customNotifierOptions } from './core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    CoreModule,
    SharedModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
