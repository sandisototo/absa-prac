import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AuthenticationService, LocalStorageService, HelperService } from '@app/core';
import { SeriesService } from '@app/core/service/series-service';

const credentialsKey = 'credentials';

@Component({
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit, AfterViewInit {
  private _credentials: Authentication.Credentials | null;
  private _series: any = [];
  title: string = 'Popular Series';

  constructor(
    private auth: AuthenticationService,
    private localStorageService: LocalStorageService,
    private seriesService: SeriesService,
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

    this.seriesService.showSpecificEntries(21);
  }

  ngAfterViewInit() {
    this.getSeries();

    this._series = this.helperService.prepareProperty(this._series, 'Poster Art', 'posterArt');

    this.cd.detectChanges();
  }

  private getSeries() {
    this.seriesService.getSeries().subscribe((v) => {
      this._series = v.length ? v : [];
    });
  }

  hoverin(id:any) {
    id = document.getElementById(id);
    id.classList.add('show');
   }
   hoverout(id:any) {
    id = document.getElementById(id);
    id.classList.remove('show');
   }
}
