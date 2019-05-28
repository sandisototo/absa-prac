import { Routes } from '@angular/router';

import { NotFoundComponent } from '@app/pages/authentication/404/not-found.component';
import { LoginComponent } from '@app/pages/authentication/login/login.component';
import { SignupComponent } from '@app/pages/authentication/signup/signup.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: NotFoundComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  }
];
