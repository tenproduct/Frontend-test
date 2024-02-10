import {createReducer, on} from '@ngrx/store';
import {getCharactersSuccess} from './app.actions';
import {initialState} from './app.state';

export const appReducer = createReducer(
  initialState,
  on(getCharactersSuccess, (state, { response }) => {
    return {
      ...state,
      totalCount: response.count,
      characters: [...state.characters, ...response.results]
    };
  })
);
