import { Injectable } from '@angular/core';
import * as CharacterActions from './characters.actions';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { SwapiService } from '../services/swapi.service';
import { switchMap, catchError, map, tap, withLatestFrom } from 'rxjs/operators';
import { PplResponse } from '../models/swapi-ppl-response.model';
import { of } from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';


@Injectable()
export class CharacterEffects {

  constructor(
    private actions$: Actions,
    private swapiService: SwapiService,
    private store: Store<fromApp.AppState>
  ) { }

  fetchCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.fetchCharacters),
      switchMap((action) => {
        return this.swapiService.fetchCharacters()
          .pipe(
            map((response: PplResponse) => {
              return CharacterActions.fetchCharactersSuccess({
                response
              });
            }),
            catchError((error) => {
              return of(
                CharacterActions.fetchCharactersError({
                  errorMessage: 'A Problem occured with Fetching the characters'
                }));
            })
          );
      })
    )
  );

  fetchNextPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.fetchNextPage),
      withLatestFrom(this.store.select('characters')),
      switchMap(([action, state]) => {
        return this.swapiService.fetchCharacters(state.nextPage)
          .pipe(
            map((response: PplResponse) => {
              return CharacterActions.fetchNextPageSuccess({
                response
              });
            }),
            catchError((error) => {
              return of(
                CharacterActions.fetchNextPageError({
                  errorMessage: 'A Problem occured with Fetching the next page of characters'
                }));
            })
          );
      })
    )
  );

  searchCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.searchCharacters),
      switchMap((action) => {
        return this.swapiService.searchCharacters(action.searchTerm)
          .pipe(
            map((response: PplResponse) => {
              return CharacterActions.searchCharactersSuccess({
                response
              });
            }),
            catchError((error) => {
              return of(
                CharacterActions.searchCharactersError({
                  errorMessage: 'A Problem occured during the search'
                }));
            })
          );
      })
    )
  );
}
