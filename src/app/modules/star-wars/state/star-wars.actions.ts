import { Action } from '@ngrx/store';
import { SortOption } from '../enums/sort-option';
import { CharacterApiResponse } from '../interfaces/character-api-response';

export enum StarWarsActionTypes {
  LoadCharacters = '[StarWarsActions] Load LoadCharacters',
  LoadCharactersSuccess = '[StarWarsActions] Load LoadCharacters Success',
  LoadCharactersFailure = '[StarWarsActions] Load LoadCharacters Failure',

  ChangeSortOption = '[StarWarsActions] ChangeSortOption',

  LoadMore = '[StarWarsActions] Load More'
}

export class LoadLoadCharacters implements Action {
  readonly type = StarWarsActionTypes.LoadCharacters;

  constructor(public search?: string,
              public page: number = 1,
              public append: boolean = false) {
  }
}

export class LoadLoadCharactersSuccess implements Action {
  readonly type = StarWarsActionTypes.LoadCharactersSuccess;

  constructor(public response: CharacterApiResponse,
              public append: boolean = false) {
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

export class LoadMore implements Action {
  readonly type = StarWarsActionTypes.LoadMore;
}

export type StarWarsActions =
  LoadLoadCharacters | LoadLoadCharactersSuccess | LoadLoadCharactersFailure |
  ChangeSortOption |
  LoadMore;
