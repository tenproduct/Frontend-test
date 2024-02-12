import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../types/swState.interface';
import { CharactersStateInterface } from '../types/charactersState.interface';

export const swFeatureSelector = (
  state: AppStateInterface
): CharactersStateInterface => state.characters;

export const isLoadingSelector = createSelector(
  swFeatureSelector,
  (charactersState: CharactersStateInterface) => charactersState.isLoading
);

export const errorSelector = createSelector(
  swFeatureSelector,
  (charactersState: CharactersStateInterface) => charactersState.error
);

export const dataSelector = createSelector(
  swFeatureSelector,
  (charactersState: CharactersStateInterface) => charactersState.data
);

export const countSelector = createSelector(
  swFeatureSelector,
  (charactersState: CharactersStateInterface) => charactersState.count
);

export const nextSelector = createSelector(
  swFeatureSelector,
  (charactersState: CharactersStateInterface) => charactersState.next
);

export const searchDataSelector = createSelector(
  swFeatureSelector,
  (charactersState: CharactersStateInterface) => charactersState.searchData
);

export const isSearchSelector = createSelector(
  swFeatureSelector,
  (charactersState: CharactersStateInterface) => charactersState.isSearch
);

export const searchCountSelector = createSelector(
  swFeatureSelector,
  (charactersState: CharactersStateInterface) => charactersState.searchCount
);

export const sortBySelector = createSelector(
  swFeatureSelector,
  (charactersState: CharactersStateInterface) => charactersState.sortBy
);
