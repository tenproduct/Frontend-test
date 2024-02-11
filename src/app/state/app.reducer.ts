import {createReducer, on} from '@ngrx/store';
import {getCharactersSuccess, searchCharacters, setCharactersLoadingStatus, sortChange} from './app.actions';
import {initialState} from './app.state';
import {sortMethods} from '../core/sort-methods';

export const appReducer = createReducer(
  initialState,
  on(getCharactersSuccess, (state, {response}) => {
    const nextPage = response.next ? +(new URL(response.next).searchParams.get('page')) : null;
    const characters = state.nextPage > 1 ? [...state.characters, ...response.results] : [...response.results];
    return {
      ...state,
      nextPage,
      totalCount: response.count,
      characters: characters.sort(sortMethods[state.sortedBy])
    };
  }),
  on(setCharactersLoadingStatus, (state, {isLoaded}) => (
    {
      ...state,
      isLoaded
    }
  )),
  on(searchCharacters, (state, { search }) => {
    return {
      ...state,
      nextPage: 1,
      search
    };
  }),
  on(sortChange, (state, { sortMethod }) => {
    return {
      ...state,
      sortedBy: sortMethod,
      characters: [...state.characters].sort(sortMethods[sortMethod])
    };
  })
);
