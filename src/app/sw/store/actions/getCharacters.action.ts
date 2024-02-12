import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { GetCharactersResponseInterface } from 'src/app/sw/types/getCharactersResponse.interface';
import { SortType } from '@sw-models/type.enum';

export const getCharactersAction = createAction(
  ActionTypes.GET_CHARACTERS,
);

export const getCharactersSuccessAction = createAction(
  ActionTypes.GET_CHARACTERS_SUCCESS,
  props<{ characters: GetCharactersResponseInterface }>()
);

export const getCharactersFailureAction = createAction(
  ActionTypes.GET_CHARACTERS_FAILURE,
);

export const loadMoreCharactersAction = createAction(
  ActionTypes.LOAD_MORE_CHARACTERS,
  props<{ url: string }>()
);

export const loadMoreCharactersSuccessAction = createAction(
  ActionTypes.LOAD_MORE_CHARACTER_SUCCESS,
  props<{ characters: GetCharactersResponseInterface }>()
);

export const loadMoreCharactersFailureAction = createAction(
  ActionTypes.LOAD_MORE_CHARACTER_FAILURE,
);

export const searchCharacterAction = createAction(
  ActionTypes.SEARCH_CHARACTERS,
  props<{ name: string }>()
);

export const searchCharactersSuccessAction = createAction(
  ActionTypes.SEARCH_CHARACTER_SUCCESS,
  props<{ characters: GetCharactersResponseInterface }>()
);

export const searchCharactersFailureAction = createAction(
  ActionTypes.SEARCH_CHARACTER_FAILURE,
);

export const resetSearchCharactersAction = createAction(
  ActionTypes.RESET_SEARCH_CHARACTERS,
);

export const sortByAction = createAction(
  ActionTypes.SORT_BY,
  props<{ sortBy: SortType | null }>()
);
