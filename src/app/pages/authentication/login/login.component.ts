import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/core';
import { finalize } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  resetPasswordForm: FormGroup;
  isLoading = false;
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private notifierService: NotifierService
  ) {
    this.createForm();
  }

  ngOnInit() { }

  login() {
    this.isLoading = true;
    this.authenticationService
      .login(this.loginForm.value)
      .pipe(
        finalize(() => {
          this.loginForm.markAsPristine();
          this.isLoading = false;
        })
      )
      .subscribe(
        (credentials: Authentication.Credentials) => {
          console.log(credentials);

          if (credentials.status) {
            this.router.navigate(['/'], {
              replaceUrl: true
            });
          } else {
            if (credentials.errors && credentials.errors.email) {
              this.notifierService.notify('error', credentials.errors.email);
            }

            if (credentials.errors && credentials.errors.password) {
              this.notifierService.notify('error', `It's also possible that you miss-typed your password: ${credentials.errors.password}`);
            }
          }
        },
        (error: any) => {
          console.log(`Login error: ${error}`);
        }
      );
  }

  resetPassword() {
    // TODO: Implement Reset Password
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
}
