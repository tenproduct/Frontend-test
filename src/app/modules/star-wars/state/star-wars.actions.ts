import { Action } from '@ngrx/store';
import { Character } from '../interfaces/character';
import { SortOption } from '../enums/sort-option';

export enum StarWarsActionTypes {
  LoadLoadCharacters = '[StarWarsActions] Load LoadCharacters',
  LoadLoadCharactersSuccess = '[StarWarsActions] Load LoadCharacters Success',
  LoadLoadCharactersFailure = '[StarWarsActions] Load LoadCharacters Failure',

  ChangeSortOption = '[StarWarsActions] ChangeSortOption'
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

export class ChangeSortOption implements Action {
  readonly type = StarWarsActionTypes.ChangeSortOption;

  constructor(public option: SortOption) {
  }
}

export type StarWarsActions = LoadLoadCharacters | LoadLoadCharactersSuccess | LoadLoadCharactersFailure |
  ChangeSortOption;
