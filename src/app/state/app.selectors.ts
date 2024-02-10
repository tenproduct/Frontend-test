import {AppState, rootStateKey} from './app.state';
import {createSelector} from '@ngrx/store';

export const root = state => state[rootStateKey];

export const selectCharacters = createSelector(root, (state: AppState) => {
  return state.characters;
});

export const selectTotalCount = createSelector(root, (state: AppState) => state.totalCount);
