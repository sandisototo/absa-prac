import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutes } from '@app/pages/dashboard/dashboard.routing';
import { HomeComponent } from '@app/pages/dashboard/home/home.component';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    SharedModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [
    HomeComponent
  ]
})
export class DashboardModule {}
