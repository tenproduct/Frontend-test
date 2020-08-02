import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { switchMap, map, withLatestFrom, filter } from 'rxjs/operators';

import { GetCharactersResponse } from '@shared/models';
import { DaoService } from '@shared/services';
import {
    characterSearchTermChangeAction,
    getCharactersSuccessAction,
    loadAllCharactersAction,
    loadNextPageAction
} from '../actions/shared.actions';
import { selectCharacterSearchTerm, selectNextPageUrl } from '../selectors';
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

    public loadMore$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadNextPageAction, loadAllCharactersAction),
            withLatestFrom(this.store.select(selectNextPageUrl)),
            filter(nextPageUrl => !!nextPageUrl),
            switchMap(([action, nextPageUrl]) => action.type === loadNextPageAction.type
                ? this.dao.getResourceByUrl<GetCharactersResponse>(nextPageUrl)
                : this.dao.getAllResourcesByUrl<GetCharactersResponse>(nextPageUrl)
            ),
            map(getCharactersResponse => getCharactersSuccessAction({ getCharactersResponse }))
        )
    );
}
