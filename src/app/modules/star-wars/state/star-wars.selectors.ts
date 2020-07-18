import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { starWarsFeatureKey, State } from './star-wars.reducer';
import { Character } from '../interfaces/character';

export const selectStarWarsState = createFeatureSelector<State>(
  starWarsFeatureKey
);

export const selectCharacters: MemoizedSelector<State, Character[]> = createSelector(
  selectStarWarsState,
  (state: State) => state.characters
);
