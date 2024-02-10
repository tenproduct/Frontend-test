import {AppState, rootStateKey} from './app.state';
import {createSelector} from '@ngrx/store';

export const root = state => state[rootStateKey];

export const selectCharacters = createSelector(root, (state: AppState) => state.characters);

export const selectCharactersLoadingStatus = createSelector(root, (state: AppState) => state.isLoaded)

export const selectTotalCount = createSelector(root, (state: AppState) => state.totalCount);
export const selectNextPage = createSelector(root, (state: AppState) => state.nextPage);
export const selectSearchTerm = createSelector(root, (state: AppState) => state.search);
export const selectSortMethod = createSelector(root, (state: AppState) => state.sortedBy);
