import { createReducer, on } from "@ngrx/store";
import { sortListBy } from "../core/helpers";
import * as CharacterActions from "./characters.actions";
import { Characters } from "./characters.models";

export const CHARACTERS_FEATURE_KEY = "characters";

export interface CharactersState {
  loading: boolean;
  characterListLoadRun: boolean;
  characterListLoadSuccess: boolean;
  characterListLoadFail: any;
  characters: Characters;
}

export const initialState: CharactersState = {
  loading: false,
  characterListLoadRun: true,
  characterListLoadSuccess: false,
  characterListLoadFail: null,
  characters: { count: null, next: null, previous: null, results: [] },
};

export const CharacterReducer = createReducer(
  initialState,

  on(CharacterActions.getCharacters, (state, { type }) => ({
    ...state,
    characterListLoadRun: true,
    characterListLoadSuccess: false,
    characterListLoadFail: null,
  })),

  on(CharacterActions.sortCharacters, (state, { type, sort }) => ({
    ...state,
    characters: {
      ...state.characters,
      results: sortListBy(state.characters.results, sort),
    },
  })),

  on(CharacterActions.setCharactersSuccess, (state, { type, payload }) => ({
    ...state,
    characterListLoadSuccess: true,
    characters: payload,
  })),

  on(CharacterActions.setCharactersFailed, (state, { type, payload }) => ({
    ...state,
    characterListLoadRun: false,
    characterListLoadFail: payload.error,
  })),

  on(CharacterActions.setCharactersLoading, (state, { type }) => ({
    ...state,
    characterListLoadSuccess: false,
  })),

  on(CharacterActions.addCharacters, (state, { type, payload }) => ({
    ...state,
    characterListLoadSuccess: true,
    characters: {
      ...payload,
      results: [...state.characters.results, ...payload.results],
    },
  }))
);
