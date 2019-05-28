import { Routes } from '@angular/router';

import { BlankComponent, FullComponent } from '@app/shared';
import { AuthenticationGuard } from './core';
import { MoviesComponent } from '@app/pages/dashboard/movies/movies.component';
import { SeriesComponent } from '@app/pages/dashboard/series';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'home',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
  {
    path: 'movies',
    component: MoviesComponent,
    children: [
      {
        path: 'movies',
        redirectTo: '/movies',
        pathMatch: 'full',
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'movies',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
  {
    path: 'series',
    component: SeriesComponent,
    children: [
      {
        path: 'series',
        redirectTo: '/series',
        pathMatch: 'full',
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'series',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',
        loadChildren:
          './pages/authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];
