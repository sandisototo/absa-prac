import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AuthenticationService, LocalStorageService, HelperService } from '@app/core';
import { MoviesService } from '@app/core/service/movies-service';

const credentialsKey = 'credentials';

@Component({
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, AfterViewInit {
  private _credentials: Authentication.Credentials | null;
  title: string  = 'Popular Movies';
  _movies: any;
  onError: boolean;

  constructor(
    private auth: AuthenticationService,
    private localStorageService: LocalStorageService,
    private moviesService: MoviesService,
    private cd: ChangeDetectorRef,
    private helperService: HelperService
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
    this._movies = this.helperService.prepareProperty(this._movies, 'Poster Art', 'posterArt');
    this.cd.detectChanges();
  }

  private getMovies() {
    this.moviesService.getMovies().subscribe((v) => {
      this._movies = v.length ? v : [];
    });
  }

  hoverin(id: any) {
    id = document.getElementById(id);
    id.classList.add('show');
  }

  hoverout(id: any) {
    id = document.getElementById(id);
    id.classList.remove('show');
  }
}
