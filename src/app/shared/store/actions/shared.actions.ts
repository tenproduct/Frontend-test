import { createAction, props } from '@ngrx/store';

import { GetCharactersResponse, CharacterSort } from '@shared/models';

export enum SharedActionTypes {
    GetCharactersSuccess = '[SHARED] Get Characters Success',
    CharacterSearchTermChange = '[SHARED] Character Search Term Change',
    LoadNextPage = '[SHARED] Load Next Page',
    CharacterSortChange = '[SHARED] Character Sort Change',
    LoadAllCharacters = '[SHARED] Load All Characters',
    StartLoading = '[SHARED] Start Loading',
    StopLoading = '[SHARED] Stop Loading',
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

export const characterSortChangeAction = createAction(
    SharedActionTypes.CharacterSortChange,
    props<{ characterSort: CharacterSort }>()
);

export const loadAllCharactersAction = createAction(
    SharedActionTypes.LoadAllCharacters
);

export const startLoadingAction = createAction(
    SharedActionTypes.StartLoading
);

export const stopLoadingAction = createAction(
    SharedActionTypes.StopLoading
);
