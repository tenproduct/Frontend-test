import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../../core/models/app.model';
import { Features } from '../../../core/models/feature.enum';
import { CharactersState } from './state';

export const selectCharacterFeature = createFeatureSelector<AppState, CharactersState>(Features.Character);

export const selectCharacterList = createSelector(
    selectCharacterFeature,
    (state: CharactersState) => state.characters,
);
 
export const selectTotalCharacterCounter = createSelector(
    selectCharacterFeature,
    (state: CharactersState) => state.total,
);

export const selectCurrentCharacterCounter = createSelector(
    selectCharacterFeature,
    (state: CharactersState) => state.characters.length,
);
