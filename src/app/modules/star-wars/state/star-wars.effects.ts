import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { StarWarsActions, StarWarsActionTypes } from './star-wars.actions';
import { StarWarsStateActions } from './index';
import { StarWarsService } from '../services/star-wars.service';
import { Character } from '../interfaces/character';

@Injectable()
export class StarWarsEffects {

  @Effect()
  loadCharacters$: Observable<StarWarsStateActions.LoadLoadCharactersSuccess | StarWarsStateActions.LoadLoadCharactersFailure> =
    this.actions$.pipe(
      ofType<StarWarsStateActions.LoadLoadCharacters>(StarWarsActionTypes.LoadCharacters),
      switchMap((action: StarWarsStateActions.LoadLoadCharacters) => this.service.loadCharacters(action.search).pipe(
        map((characters: Character[]) => new StarWarsStateActions.LoadLoadCharactersSuccess(characters)),
        catchError(() => of(new StarWarsStateActions.LoadLoadCharactersFailure()))
      ))
    );

  constructor(private actions$: Actions<StarWarsActions>,
              private service: StarWarsService) {
  }

}
