import { createAction, props } from '@ngrx/store';

import { GetCharactersResponse } from '@shared/models';

export enum SharedActionTypes {
    GetCharactersSuccess = '[SHARED] Get Characters Success',
    CharacterSearchTermChange = '[SHARED] Character Search Term Change',
    LoadNextPage = '[SHARED] Load Next Page'
}

export const getCharactersSuccessAction = createAction(
    SharedActionTypes.GetCharactersSuccess,
    props<{ getCharactersResponse: GetCharactersResponse }>()
);

export const characterSearchTermChangeAction = createAction(
    SharedActionTypes.CharacterSearchTermChange,
    props<{ characterSearchTerm: string }>()
);

export const loadNextPageAction = createAction(
    SharedActionTypes.LoadNextPage
);
