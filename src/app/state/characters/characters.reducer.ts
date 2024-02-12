import { createReducer, on } from '@ngrx/store';
import {
  getCharactersSuccess,
  searchCharacters,
  setCharactersLoadingStatus,
  sortChange,
} from './characters.actions';
import { sortMethods } from '../../core/sort-methods';
import { initialCharactersState } from './characters.state';

export const charactersReducer = createReducer(
  initialCharactersState,
  on(getCharactersSuccess, (state, { response }) => {
    const nextPage = response.next
      ? +new URL(response.next).searchParams.get('page')
      : null;
    const characters =
      state.nextPage > 1
        ? [...state.characters, ...response.results]
        : [...response.results];
    return {
      ...state,
      nextPage,
      totalCount: response.count,
      characters: characters.sort(sortMethods[state.sortedBy]),
    };
  }),
  on(setCharactersLoadingStatus, (state, { isLoaded }) => ({
    ...state,
    isLoaded,
  })),
  on(searchCharacters, (state, { search }) => {
    return {
      ...state,
      nextPage: 1,
      search,
    };
  }),
  on(sortChange, (state, { sortMethod }) => {
    return {
      ...state,
      sortedBy: sortMethod,
      characters: [...state.characters].sort(sortMethods[sortMethod]),
    };
  }),
);
