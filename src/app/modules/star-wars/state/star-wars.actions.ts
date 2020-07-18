import { Action } from '@ngrx/store';
import { Character } from '../interfaces/character';

export enum StarWarsActionTypes {
  LoadLoadCharacters = '[LoadCharacters] Load LoadCharacters',
  LoadLoadCharactersSuccess = '[LoadCharacters] Load LoadCharacters Success',
  LoadLoadCharactersFailure = '[LoadCharacters] Load LoadCharacters Failure',
}

export class LoadLoadCharacters implements Action {
  readonly type = StarWarsActionTypes.LoadLoadCharacters;
}

export class LoadLoadCharactersSuccess implements Action {
  readonly type = StarWarsActionTypes.LoadLoadCharactersSuccess;

  constructor(public characters: Character[]) {
  }
}

export class LoadLoadCharactersFailure implements Action {
  readonly type = StarWarsActionTypes.LoadLoadCharactersFailure;

  constructor(public error?: any) {
  }
}

export type StarWarsActions = LoadLoadCharacters | LoadLoadCharactersSuccess | LoadLoadCharactersFailure;
