import { createAction, props } from '@ngrx/store';

import { GetCharactersResponse } from '@shared/models';

export enum SharedActionTypes {
    GetCharactersSuccess = '[SHARED] Get Characters Success',
    CharacterSearchTermChange = '[SHARED] Character Search Term Change'
}

export const getCharactersSuccessAction = createAction(
    SharedActionTypes.GetCharactersSuccess,
    props<{ getCharactersResponse: GetCharactersResponse }>()
);

export const characterSearchTermChangeAction = createAction(
    SharedActionTypes.CharacterSearchTermChange,
    props<{ characterSearchTerm: string }>()
);
