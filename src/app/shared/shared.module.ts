import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@app/shared/header/header.component';
import { FooterComponent } from '@app/shared/footer/footer.component';
import { BreadcrumbComponent } from '@app/shared/breadcrumb/breadcrumb.component';
import { BlankComponent } from '@app/shared/layouts/blank/blank.component';
import { FullComponent } from '@app/shared/layouts/full/full.component';
import { SpinnerComponent } from '@app/shared/spinner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonLoaderComponent } from '@app/shared/button-loader';
import { FormErrorWrapperComponent } from '@app/shared/form-error-wrapper/form-error-wrapper.component';
import { MoviesComponent } from '@app/pages/dashboard/movies';
import { SeriesComponent } from '@app/pages/dashboard/series';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    SeriesComponent,
    SpinnerComponent,
    BreadcrumbComponent,
    BlankComponent,
    FullComponent,
    ButtonLoaderComponent,
    FormErrorWrapperComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    BreadcrumbComponent,
    BlankComponent,
    FullComponent,
    ButtonLoaderComponent,
    FormErrorWrapperComponent
  ],
  entryComponents: [],
  providers: []
})
export class SharedModule {}
