import { createSelector } from '@ngrx/store';

import { AppState, rootStateKey } from './app.state';

export const root = (state) => state[rootStateKey];

export const selectPeople = createSelector(root, (state: AppState) => {
    return state.people;
});

export const selectCount = createSelector(root, (state: AppState) => state.count);

export const selectNextPage = createSelector(root, (state: AppState) => state.nextPage);

export const selectSearchTerm = createSelector(root, (state: AppState) => state.searchTerm);

export const selectSort = createSelector(root, (state: AppState) => state.sort);
