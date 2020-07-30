import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';

import { switchMap, map } from 'rxjs/operators';

import { DaoService } from '@shared/services';
import { getCharactersSuccessAction } from '../actions/shared.actions';

@Injectable()
export class SharedEffects {
    constructor(private actions$: Actions, private dao: DaoService) { }

    public loadCharacters$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROOT_EFFECTS_INIT),
            switchMap(() => this.dao.getCharacters()),
            map(getCharactersResponse => getCharactersSuccessAction({ getCharactersResponse }))
        )
    );
}
