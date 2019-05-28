import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import data from '@app/core/data-source/feed/sample.json';
import { HelperService } from './helper-service';
import { PlayTypes } from '..';

@Injectable()
export class MoviesService {
    public movies$ = new BehaviorSubject<any>(null);
    _movies: any;

    constructor(
        private helperService: HelperService
    ) { }

    showSpecificEntries(limit: number) {
        if (data && typeof data.entries !== 'undefined') {
            const series = this._movies = data.entries.filter((v) => v.programType === PlayTypes.MOVIE && v.releaseYear >= 2010);

            const requested = series.slice(0, limit);
            const sorted = requested.sort(this.helperService.dynamicSort('title'));

            this.setMovies(sorted);
        }
    }


    private setMovies(movies?: any) {
        this._movies = movies || null;
        if (this._movies) {
            this.movies$.next(this._movies);
        }
    }

    getMovies(): Observable<any> {
        return this.movies$.asObservable();
    }
}
