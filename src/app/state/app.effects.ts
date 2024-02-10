import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {getCharacters, getCharactersFailed, getCharactersSuccess} from './app.actions';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {SwCharactersService} from '../client/characters-listing/sw-characters.service';

@Injectable()
export class AppEffects {
  constructor(private readonly actions$: Actions,
              private readonly charactersService: SwCharactersService) {
  }
  getCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(getCharacters),
    exhaustMap(() => this.charactersService.getCharacters(1,'')),
    map(response => getCharactersSuccess({response})),
    catchError(() => of(getCharactersFailed()))
  ));
}
