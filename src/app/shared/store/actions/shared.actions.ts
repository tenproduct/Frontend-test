import { createAction, props } from '@ngrx/store';

import { GetCharactersResponse } from '@shared/models';

export enum SharedActionTypes {
    GetCharactersSuccess = '[SHARED] Get Characters Success'
}

export const getCharactersSuccessAction = createAction(
    SharedActionTypes.GetCharactersSuccess,
    props<{ getCharactersResponse: GetCharactersResponse }>()
);
