import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import data from '@app/core/data-source/feed/sample.json';
import { HelperService } from './helper-service';
import { PlayTypes } from '..';

@Injectable()
export class SeriesService {
    public series$ = new BehaviorSubject<any>(null);
    _series: any;

    constructor(
        private helperService: HelperService
    ) { }

    showSpecificEntries(limit: number) {
        if (data && typeof data.entries !== 'undefined') {
            const series = data.entries.filter((v) => v.programType === PlayTypes.SERIES && v.releaseYear >= 2010);

            const requested = series.slice(0, limit);
            const sorted = requested.sort(this.helperService.dynamicSort('title'));

            this.setSeries(sorted);
        }
    }


    private setSeries(series?: any) {
        this._series = series || null;
        if (this._series) {
            this.series$.next(this._series);
        }
    }

    getSeries(): Observable<any> {
        return this.series$.asObservable();
    }
}
