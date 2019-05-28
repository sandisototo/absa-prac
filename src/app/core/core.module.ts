import { CommonModule } from '@angular/common';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import {
  AuthenticationGuard,
  AuthenticationService
} from '@app/core/service/authentication';
import {
  ApiPrefixInterceptor,
  ErrorHandlerInterceptor,
  HttpService
} from '@app/core/http';
import { LocalStorageService } from '@app/core/service/local-storage.service';
import { RouteReusableStrategy } from '@app/core/route-reusable-strategy';
import {
  ErrorMessageService,
  UserService,
  UtilService
} from '@app/core/service';
import { HeaderConfigService } from './http/header-config';
import { MoviesService } from '@app/core/service/movies-service';
import { SeriesService } from '@app/core/service/series-service';
import { HelperService } from '@app/core/service/helper-service';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  declarations: [],
  providers: [
    LocalStorageService,
    AuthenticationService,
    MoviesService,
    SeriesService,
    HelperService,
    AuthenticationGuard,
    ApiPrefixInterceptor,
    ErrorHandlerInterceptor,
    UserService,
    UtilService,
    HeaderConfigService,
    ErrorMessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    {
      provide: HttpClient,
      useClass: HttpService
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy
    }
  ]
})
export class CoreModule {}
