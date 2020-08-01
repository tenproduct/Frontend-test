import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { DaoService } from '@shared/services';
import { getCharactersSuccessAction, characterSearchTermChangeAction } from '../actions/shared.actions';
import { selectCharacterSearchTerm } from '../selectors';
import { AppState } from '../app.state';

@Injectable()
export class SharedEffects {
    constructor(private actions$: Actions, private store: Store<AppState>, private dao: DaoService) { }

    public loadCharacters$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROOT_EFFECTS_INIT, characterSearchTermChangeAction),
            withLatestFrom(this.store.select(selectCharacterSearchTerm)),
            switchMap(([action, searchTerm]) => this.dao.getCharacters(searchTerm)),
            map(getCharactersResponse => getCharactersSuccessAction({ getCharactersResponse }))
        )
    );
}
