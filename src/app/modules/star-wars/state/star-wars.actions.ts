import { Action } from '@ngrx/store';

export enum StarWarsActionTypes {
  LoadStarWarss = '[StarWars] Load StarWarss',
}

export class LoadStarWarss implements Action {
  readonly type = StarWarsActionTypes.LoadStarWarss;
}


export type StarWarsActions = LoadStarWarss;
