import {createAction, props} from '@ngrx/store';
import {IPeople} from '../state.models';

export enum actionsNames  {
  LOAD_PEOPLE = '[ App component ] Load people',
  LOADED_PEOPLE = '[ App component ] Loaded people'
}

export const loadPeople = createAction(actionsNames.LOAD_PEOPLE);

export const loadedPeople = createAction(actionsNames.LOADED_PEOPLE, props<{payload: Array<IPeople>}>());


