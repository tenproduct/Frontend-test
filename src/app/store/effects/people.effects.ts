import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {actionsNames} from '../actions/people.actions';
import {SwapiService} from '../../services/swapi.service';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Injectable()
export class PeopleEffects {
  loadPeople$ = createEffect(() => (
    this.actions$
      .pipe(
        ofType(actionsNames.LOAD_PEOPLE),
        exhaustMap(() => this.swService.getPeople().pipe(
          map((data) => ({
            type: actionsNames.LOADED_PEOPLE,
            payload: data
          })),
          catchError(() => EMPTY)
        ))

      )
    )
  );

  constructor(private actions$: Actions, private swService: SwapiService) {
  }
}
