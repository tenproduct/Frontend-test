import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { StarWarsActionTypes, StarWarsActions } from './star-wars.actions';


@Injectable()
export class StarWarsEffects {


  @Effect()
  loadStarWarss$ = this.actions$.pipe(
    ofType(StarWarsActionTypes.LoadStarWarss),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<StarWarsActions>) {
  }

}
