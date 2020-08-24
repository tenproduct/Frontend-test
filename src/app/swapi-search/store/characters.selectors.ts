import { AppState } from '../../store/app.reducer';
import { createSelector } from '@ngrx/store';
import { CharacterState } from './characters.reducer';

export const selectCharacterState = (state: AppState) => state.characters;

export const selectCharacterTotalCount = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.totalCount
);

export const selectCharacterNextPage = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.nextPage
);

export const selectSortedCharacterData = createSelector(
  selectCharacterState,
  (state: CharacterState) => {
    return state.characterData;
  }
);

export const selectIsLoading = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.isLoading
);

export const selectCharacterSortType = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.sortType
);

export const selectCharacterSortDirection = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.sortDirection
);

export const selectErrorMsg = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.errorMsg
);
