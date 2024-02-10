import {createReducer, on} from '@ngrx/store';
import {getCharactersSuccess, searchCharacters, setCharactersLoadingStatus} from './app.actions';
import {initialState} from './app.state';

export const appReducer = createReducer(
  initialState,
  on(getCharactersSuccess, (state, {response}) => {
    const nextPage = response.next ? +(new URL(response.next).searchParams.get('page')) : null;
    const characters = state.nextPage > 1 ? [...state.characters, ...response.results] : [...response.results];
    return {
      ...state,
      nextPage,
      totalCount: response.count,
      characters
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
  })
);
