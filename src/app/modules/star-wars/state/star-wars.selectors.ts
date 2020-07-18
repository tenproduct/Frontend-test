import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStarWars from './star-wars.reducer';

export const selectStarWarsState = createFeatureSelector<fromStarWars.State>(
  fromStarWars.starWarsFeatureKey
);
