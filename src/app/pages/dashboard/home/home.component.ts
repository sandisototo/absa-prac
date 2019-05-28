import { Component, OnInit } from '@angular/core';
import { AuthenticationService, LocalStorageService } from '@app/core';

const credentialsKey = 'credentials';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private _credentials: Authentication.Credentials | null;

  constructor(
    private auth: AuthenticationService,
    private localStorageService: LocalStorageService
  ) { 
    const savedCredentials = this.localStorageService.getItem(credentialsKey);
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    }
  }

  ngOnInit() {
    this.auth.getCredentials().subscribe((v) => {
      this._credentials = v;
    });
  }
}
