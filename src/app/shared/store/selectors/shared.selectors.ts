import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState, SharedState } from '../app.state';
import { characterAdapter } from '../entity-adapters/character.adapter';

export const selectSharedState = createFeatureSelector<AppState, SharedState>('shared');

const selectCharacterEntityState = createSelector(
    selectSharedState,
    sharedState => sharedState.characters
);

export const selectCharacters = createSelector(
    characterAdapter.getSelectors(selectCharacterEntityState).selectAll,
    characters => characters
);

export const selectCharacterSearchTerm = createSelector(
    selectSharedState,
    sharedState => sharedState.characterSearchTerm
);

export const selectCharacterCount = createSelector(
    selectSharedState,
    sharedState => sharedState.characterCount
);

export const selectCanLoadMore = createSelector(
    selectSharedState,
    sharedState => !!sharedState.nextPageUrl
);

export const selectNextPageUrl = createSelector(
    selectSharedState,
    sharedState => sharedState.nextPageUrl
);

export const selectIsLoading = createSelector(
    selectSharedState,
    sharedState => sharedState.loadingCount > 0
);
