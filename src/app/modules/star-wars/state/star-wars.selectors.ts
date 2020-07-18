import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { starWarsFeatureKey, State } from './star-wars.reducer';
import { Character } from '../interfaces/character';
import { SortOption } from '../enums/sort-option';
import { sortByFemale, sortByMale, sortByNameAsc, sortByNameDesc } from '../utils/sort';

export const selectStarWarsState = createFeatureSelector<State>(
  starWarsFeatureKey
);

export const selectSortOption: MemoizedSelector<State, SortOption> = createSelector(
  selectStarWarsState,
  (state: State) => state.sortOption
);

export const selectCharacters: MemoizedSelector<State, Character[]> = createSelector(
  selectStarWarsState,
  selectSortOption,
  (state: State, sortOption: SortOption) => {
    const characters: Character[] = [...state.characters];
    switch (sortOption) {
      case SortOption.A_Z:
        return characters.sort(sortByNameAsc);

      case SortOption.Z_A:
        return characters.sort(sortByNameDesc);

      case SortOption.Male:
        return characters.sort(sortByMale);

      case SortOption.Female:
        return characters.sort(sortByFemale);
    }
  }
);
