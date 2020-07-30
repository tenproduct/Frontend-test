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
