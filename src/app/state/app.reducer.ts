import {createReducer, on} from '@ngrx/store';
import {getCharactersSuccess, setCharactersLoadingStatus} from './app.actions';
import {initialState} from './app.state';

export const appReducer = createReducer(
  initialState,
  on(getCharactersSuccess, (state, {response}) => (
    {
      ...state,
      totalCount: response.count,
      characters: [...state.characters, ...response.results]
    }
  )),
  on(setCharactersLoadingStatus, (state, {isLoaded}) => (
    {
      ...state,
      isLoaded
    }
  ))
);
