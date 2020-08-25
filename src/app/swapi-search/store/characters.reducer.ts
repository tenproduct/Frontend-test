import { Action, createReducer, on } from '@ngrx/store';
import { Character } from '../models/swapi-ppl-character.model';
import * as CharacterActions from './characters.actions';
import { SortType } from '../enums/sort-type.enum';
import { SortDirection } from '../enums/sort-direction.enum';

export interface CharacterState {
  totalCount: number;
  nextPage: string;
  previousPage: string;
  characterData: Character[];
  errorMsg?: string;
  isLoading: boolean;
  sortType: SortType;
  sortDirection: SortDirection;
}

const initialState: CharacterState = {
  totalCount: 0,
  nextPage: '',
  previousPage: '',
  characterData: [],
  errorMsg: null,
  isLoading: false,
  sortType: SortType.DEFAULT,
  sortDirection: SortDirection.ONWARDS
};

// tslint:disable-next-line: variable-name
const _characterReducer = createReducer(
  initialState,

  on(
    CharacterActions.fetchCharacters,
    CharacterActions.fetchNextPage,
    CharacterActions.searchCharacters,
    (state) => ({
      ...state,
      isLoading: true
    })
  ),

  on(
    CharacterActions.fetchCharactersSuccess,
    CharacterActions.searchCharactersSuccess,
    (state, action) => ({
      ...state,
      error: null,
      isLoading: false,
      totalCount: action.response.count,
      nextPage: action.response.next,
      previousPage: action.response.previous,
      characterData: action.response.results
    })
  ),

  on(
    CharacterActions.fetchNextPageSuccess,
    (state, action) => ({
      ...state,
      characterData: [
        ...state.characterData,
        ...action.response.results
      ],
      isLoading: false,
      nextPage: action.response.next,
      previousPage: action.response.previous,
    })
  ),

  on(
    CharacterActions.fetchCharactersError,
    CharacterActions.searchCharactersError,
    CharacterActions.fetchNextPageError,
    (state, action) => ({
      ...state,
      error: action.errorMessage
    })
  ),

  on(
    CharacterActions.sortCharacters,
    (state, action) => ({
      ...state,
      sortDirection: getSortDirection(state, action),
      sortType: action.sortType
    })
  )

);

export function characterReducer(state: CharacterState, action: Action) {
  return _characterReducer(state, action);
}

function getSortDirection(state, action): SortDirection {
  if (state.sortType === action.sortType) {
    return state.sortDirection === SortDirection.ONWARDS ? SortDirection.BACKWARDS : SortDirection.ONWARDS;
  }

  return SortDirection.ONWARDS;
}

