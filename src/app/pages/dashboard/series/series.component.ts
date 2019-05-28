import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AuthenticationService, LocalStorageService } from '@app/core';
import { SeriesService } from '@app/core/service/series-service';

const credentialsKey = 'credentials';

@Component({
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit, AfterViewInit {
  private _credentials: Authentication.Credentials | null;
  private _series: any = [];

  constructor(
    private auth: AuthenticationService,
    private localStorageService: LocalStorageService,
    private seriesService: SeriesService,
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

    this.seriesService.showSpecificEntries(21);
  }

  ngAfterViewInit() {
    this.getSeries();

    this._series = JSON.parse(JSON.stringify(this._series).split('"Poster Art":').join('"posterArt":'));

    this.cd.detectChanges();
  }


  private getSeries() {
    this.seriesService.getSeries().subscribe((v) => {
      this._series = v.length ? v : [];
    });
  }
}
