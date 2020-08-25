import { AppState } from '../../store/app.reducer';
import { createSelector } from '@ngrx/store';
import { CharacterState } from './characters.reducer';
import { SortType } from '../enums/sort-type.enum';
import { SortDirection } from '../enums/sort-direction.enum';
import { Character } from '../models/swapi-ppl-character.model';

export const selectCharacterState = (state: AppState) => state.characters;

export const selectCharacterTotalCount = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.totalCount
);

export const selectCharacterNextPage = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.nextPage
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

export const selectSortedCharacterData = createSelector(
  selectCharacterState,
  selectCharacterSortType,
  selectCharacterSortDirection,
  (state: CharacterState, sortType: SortType, sortDirection: SortDirection) => {
    // tslint:disable-next-line: max-line-length
    return sortDirection === SortDirection.ONWARDS ? onwardsSort(state.characterData, sortType) : backwardsSort(state.characterData, sortType);
  }
);

function backwardsSort(characterData: Character[], sortType: SortType): Character[] {
  if (sortType) { return characterData.sort((a, b) => a[sortType] < b[sortType] ? -1 : 1); } else { return characterData; }
}

function onwardsSort(characterData: Character[], sortType): Character[] {
  if (sortType) { return characterData.sort((a, b) => a[sortType] > b[sortType] ? -1 : 1); } else { return characterData; }
}
