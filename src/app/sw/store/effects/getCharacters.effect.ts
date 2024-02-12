import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  getCharactersAction,
  getCharactersFailureAction,
  getCharactersSuccessAction,
  loadMoreCharactersAction,
  loadMoreCharactersFailureAction,
  loadMoreCharactersSuccessAction,
  searchCharacterAction,
  searchCharactersFailureAction,
  searchCharactersSuccessAction
} from '../actions/getCharacters.action';
import { GetCharactersResponseInterface } from 'src/app/sw/types/getCharactersResponse.interface';
import { SwService } from '@sw-services/sw.service';

@Injectable()
export class GetCharactersEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly swService: SwService,
  ) {}

  getCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCharactersAction),
      switchMap(() => {
        return this.swService.getData().pipe(
          map((characters: GetCharactersResponseInterface) => getCharactersSuccessAction({ characters })),
          catchError(() => of(getCharactersFailureAction()))
        );
      })
    )
  );

  loadMoreCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMoreCharactersAction),
      switchMap(({ url }) => {
        return this.swService.getNextData(url).pipe(
          map((characters: GetCharactersResponseInterface) => loadMoreCharactersSuccessAction({ characters })),
          catchError(() => of(loadMoreCharactersFailureAction()))
        );
      })
    )
  );

  searchCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchCharacterAction),
      switchMap(({ name }) => {
        return this.swService.search(name).pipe(
          map((characters: GetCharactersResponseInterface) => searchCharactersSuccessAction({ characters })),
          catchError(() => of(searchCharactersFailureAction()))
        );
      })
    )
  );
}
