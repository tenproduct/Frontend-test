import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  getCharacters,
  getCharactersFailed,
  getCharactersSuccess,
  loadMoreCharacters, searchCharacters,
  setCharactersLoadingStatus
} from './app.actions';
import {catchError, delay, exhaustMap, map, tap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {SwCharactersService} from '../client/characters-listing/sw-characters.service';
import {Store} from "@ngrx/store";
import {selectNextPage, selectSearchTerm} from "./app.selectors";

@Injectable()
export class AppEffects {
  constructor(private readonly actions$: Actions,
              private readonly store$: Store,
              private readonly charactersService: SwCharactersService) {
  }
  getCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(getCharacters, loadMoreCharacters, searchCharacters),
    tap(() => this.store$.dispatch(setCharactersLoadingStatus({isLoaded: false}))),
    withLatestFrom(this.store$.select(selectNextPage), this.store$.select(selectSearchTerm)),
    exhaustMap(([_, nextPage, search]) => {
      return this.charactersService.getCharacters(nextPage, search);
    }),
    tap(() => this.store$.dispatch(setCharactersLoadingStatus({isLoaded: true}))),
    map(response => getCharactersSuccess({response})),
    catchError(() => {
      this.store$.dispatch(setCharactersLoadingStatus({isLoaded: true}));
      return of(getCharactersFailed());
    }),
  ));
}
