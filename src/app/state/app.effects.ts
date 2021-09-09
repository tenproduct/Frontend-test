import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { of } from 'rxjs';
import { map, catchError, mergeMap, withLatestFrom } from 'rxjs/operators';

import * as actions from './app.actions';
import * as selectors from './app.selectors';
import { SwapiService } from '../services/swapi.service';

@Injectable()
export class AppEffects {
    loadPeople$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.fetchPeople, actions.searchTermChange),
            withLatestFrom(this.store.select(selectors.selectNextPage), this.store.select(selectors.selectSearchTerm)),
            mergeMap(([_, nextPage, searchTerm]) => this.swapi.getPeople(nextPage, searchTerm)),
            map((response) => actions.fetchPeopleSuccess({ response })),
            catchError(() => of(actions.fetchPeopleFailed()))
        )
    );

    constructor(private actions$: Actions, private swapi: SwapiService, private store: Store) {}
}
