import {createAction, props} from '@ngrx/store';
import {SWCharacterResponse} from '../core/models/character-response.model';
import {ActionsEnum} from '../core/enums/actions.enum';

const PREFIX = ActionsEnum.SW_HEROES;

export const getCharacters = createAction(`${PREFIX} Get characters Started`);

export const getCharactersSuccess = createAction(`${PREFIX} Get characters Success`, props<{ response: SWCharacterResponse }>());

export const getCharactersFailed = createAction(`${PREFIX} Get characters Failed`);

export const setCharactersLoadingStatus = createAction(`${PREFIX} Set characters loading`, props<{isLoaded: boolean}>());

