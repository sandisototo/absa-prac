import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AuthenticationService, LocalStorageService } from '@app/core';
import { MoviesService } from '@app/core/service/movies-service';

const credentialsKey = 'credentials';

@Component({
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, AfterViewInit{
  private _credentials: Authentication.Credentials | null;
  _movies: any;
  onError: boolean;

  constructor(
    private auth: AuthenticationService,
    private localStorageService: LocalStorageService,
    private moviesService: MoviesService,
    private cd: ChangeDetectorRef
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

    this.moviesService.showSpecificEntries(21);
  }

  ngAfterViewInit() {
    this.getMovies();
    this._movies = JSON.parse(JSON.stringify(this._movies).split('"Poster Art":').join('"posterArt":'));
    this.cd.detectChanges();
  }

  private getMovies() {
    this.moviesService.getMovies().subscribe((v) => {
      this._movies = v.length ? v : [];
    });
  }
}
