import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {getCharacters} from './app.actions';
import {exhaustMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(private readonly actions$: Actions) {
  }
  getCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(getCharacters),
    exhaustMap(() => of(null))
  ));
}
