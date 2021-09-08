import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';

import * as actions from './app.actions';
import { SwapiService } from '../services/swapi.service';

@Injectable()
export class AppEffects {
    loadPeople$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.fetchPeople),
            mergeMap(() => this.swapi.getPeople()),
            map((response) => actions.fetchPeopleSuccess({ response })),
            catchError(() => of(actions.fetchPeopleFailed()))
        )
    );

    constructor(private actions$: Actions, private swapi: SwapiService) {}
}
