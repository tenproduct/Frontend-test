import { ActionReducerMap, createReducer } from '@ngrx/store';
import { Character } from '../models/swapi-ppl-character.model';

export interface CharacterState {
  resultCount: number;
  nextPage: string;
  previousPage: string;
  characterData: Character[];
}

const initialState: CharacterState = {
  resultCount: 0,
  nextPage: '',
  previousPage: '',
  characterData: []
};

const characterReducer = createReducer(
  initialState
);
