import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
import { AppState } from '../../core/models/app.model';
import { CharactersActions } from '../models/character.enum';
import { CharacterService } from '../services/character.service';
import { CharactersLoadedError, CharactersLoadedSuccess } from './actions';
import { selectCharacterFeature } from './selectors';
 
@Injectable()
export class CharacterEffects {
 
  loadCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(
        ...
        [
            CharactersActions.LoadCharacters,
            CharactersActions.LoadMoreCharacters,
            CharactersActions.SearchCharacters
        ]
      ),
    withLatestFrom(this.store$.select(selectCharacterFeature)),
    mergeMap(([action, characterState]) => {
        const { currentPage, search } = characterState;
        return this.characterService.getCharacters(currentPage, search)
      .pipe(
        map(characters => new CharactersLoadedSuccess(characters)),
        catchError(() => of(new CharactersLoadedError()))
      )})
    )
  );
 
  constructor(
    private store$: Store<AppState>,
    private actions$: Actions,
    private characterService: CharacterService
  ) {}
}
 