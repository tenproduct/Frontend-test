import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CHARACTERS_FEATURE_KEY, CharactersState } from "./characters.reducer";

export const selectCharactersState = createFeatureSelector<CharactersState>(
  CHARACTERS_FEATURE_KEY
);

export const isCharacterListLoadRun = createSelector(
  selectCharactersState,
  (state) => state.characterListLoadRun
);

export const isCharacterListLoadSuccess = createSelector(
  selectCharactersState,
  (state) => state.characterListLoadSuccess
);

export const isCharacterListLoadFail = createSelector(
  selectCharactersState,
  (state) => state.characterListLoadFail
);

export const getAllCharacters = createSelector(
  selectCharactersState,
  (state) => state.characters.results
);

export const getNextPage = createSelector(
  selectCharactersState,
  (state) => state.characters.next
);

export const getTotalCharacters = createSelector(
  selectCharactersState,
  (state) => state.characters.count
);

export const getLoadedCharacters = createSelector(
  selectCharactersState,
  (state) => state.characters.results.length
);
