import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharactersState } from '../../core/models/characters-state.model';
import { CHARACTERS_STATE_NAME } from './characters.state';

const selectFeature = createFeatureSelector<CharactersState>(
  CHARACTERS_STATE_NAME,
);

export const selectCharacters = createSelector(
  selectFeature,
  (state: CharactersState) => state.characters,
);

export const selectCharactersLoadingStatus = createSelector(
  selectFeature,
  (state: CharactersState) => state.isLoaded,
);

export const selectTotalCount = createSelector(
  selectFeature,
  (state: CharactersState) => state.totalCount,
);
export const selectNextPage = createSelector(
  selectFeature,
  (state: CharactersState) => state.nextPage,
);
export const selectSearchTerm = createSelector(
  selectFeature,
  (state: CharactersState) => state.search,
);
export const selectSortMethod = createSelector(
  selectFeature,
  (state: CharactersState) => state.sortedBy,
);
