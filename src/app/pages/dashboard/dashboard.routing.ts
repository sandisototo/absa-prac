import { Routes } from '@angular/router';
import { AuthenticationGuard } from '@app/core';

import { HomeComponent } from '@app/pages/dashboard/home/home.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          title: 'Home'
        }
      }
    ]
  }
];
