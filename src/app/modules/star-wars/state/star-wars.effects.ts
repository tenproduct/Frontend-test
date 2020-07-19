import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';

import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { StarWarsActions, StarWarsActionTypes } from './star-wars.actions';
import { StarWarsSelectors, StarWarsStateActions } from './index';
import { StarWarsService } from '../services/star-wars.service';
import { CharacterApiResponse } from '../interfaces/character-api-response';
import { State } from './star-wars.reducer';

@Injectable()
export class StarWarsEffects {

  @Effect()
  loadCharacters$: Observable<StarWarsStateActions.LoadLoadCharactersSuccess | StarWarsStateActions.LoadLoadCharactersFailure> =
    this.actions$.pipe(
      ofType<StarWarsStateActions.LoadLoadCharacters>(StarWarsActionTypes.LoadCharacters),
      switchMap((action: StarWarsStateActions.LoadLoadCharacters) => this.service.loadCharacters(action.search, action.page).pipe(
        map((response: CharacterApiResponse) => new StarWarsStateActions.LoadLoadCharactersSuccess(response, action.append)),
        catchError(() => of(new StarWarsStateActions.LoadLoadCharactersFailure()))
      ))
    );

  @Effect()
  loadMore$: Observable<StarWarsStateActions.LoadLoadCharacters> = this.actions$.pipe(
    ofType<StarWarsStateActions.LoadMore>(StarWarsActionTypes.LoadMore),
    withLatestFrom(
      this.store.pipe(select(StarWarsSelectors.selectCurrentPage)),
      this.store.pipe(select(StarWarsSelectors.selectCurrentSearch))
    ),
    map(([action, page, search]: [StarWarsStateActions.LoadMore, number, string]) =>
      new StarWarsStateActions.LoadLoadCharacters(search, page + 1, true))
  );

  constructor(private actions$: Actions<StarWarsActions>,
              private store: Store<State>,
              private service: StarWarsService) {
  }

}
