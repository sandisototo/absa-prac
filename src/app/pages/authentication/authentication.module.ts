import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotFoundComponent } from '@app/pages/authentication/404/not-found.component';
import { AuthenticationRoutes } from '@app/pages/authentication/authentication.routing';
import { LoginComponent } from '@app/pages/authentication/login/login.component';
import { SignupComponent } from '@app/pages/authentication/signup/signup.component';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    SharedModule,
    RouterModule.forChild(AuthenticationRoutes)
  ],
  declarations: [NotFoundComponent, SignupComponent, LoginComponent]
})
export class AuthenticationModule {}
