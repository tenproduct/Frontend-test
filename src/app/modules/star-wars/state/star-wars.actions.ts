import { Action } from '@ngrx/store';
import { Character } from '../interfaces/character';
import { SortOption } from '../enums/sort-option';

export enum StarWarsActionTypes {
  LoadCharacters = '[StarWarsActions] Load LoadCharacters',
  LoadCharactersSuccess = '[StarWarsActions] Load LoadCharacters Success',
  LoadCharactersFailure = '[StarWarsActions] Load LoadCharacters Failure',

  ChangeSortOption = '[StarWarsActions] ChangeSortOption'
}

export class LoadLoadCharacters implements Action {
  readonly type = StarWarsActionTypes.LoadCharacters;

  constructor(public search?: string) {
  }
}

export class LoadLoadCharactersSuccess implements Action {
  readonly type = StarWarsActionTypes.LoadCharactersSuccess;

  constructor(public characters: Character[]) {
  }
}

export class LoadLoadCharactersFailure implements Action {
  readonly type = StarWarsActionTypes.LoadCharactersFailure;

  constructor(public error?: any) {
  }
}

export class ChangeSortOption implements Action {
  readonly type = StarWarsActionTypes.ChangeSortOption;

  constructor(public option: SortOption) {
  }
}

export type StarWarsActions =
  LoadLoadCharacters | LoadLoadCharactersSuccess | LoadLoadCharactersFailure |
  ChangeSortOption;
