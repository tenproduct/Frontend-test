import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {getCharacters, getCharactersFailed, getCharactersSuccess, setCharactersLoadingStatus} from './app.actions';
import {catchError, exhaustMap, map, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {SwCharactersService} from '../client/characters-listing/sw-characters.service';
import {Store} from "@ngrx/store";

@Injectable()
export class AppEffects {
  constructor(private readonly actions$: Actions,
              private readonly store$: Store,
              private readonly charactersService: SwCharactersService) {
  }
  getCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(getCharacters),
    exhaustMap(() => {
      this.store$.dispatch(setCharactersLoadingStatus({isLoaded: false}));
      return this.charactersService.getCharacters(1,'');
    }),
    tap(() => this.store$.dispatch(setCharactersLoadingStatus({isLoaded: true}))),
    map(response => getCharactersSuccess({response})),
    catchError(() => {
      this.store$.dispatch(setCharactersLoadingStatus({isLoaded: true}));
      return of(getCharactersFailed());
    }),
  ));
}
