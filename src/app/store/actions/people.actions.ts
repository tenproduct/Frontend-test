import { createAction, props } from '@ngrx/store';
import { IPeople } from '../state.models';
import { IResponse } from '../../models/config.model';
import {sortByEnum} from '../reducers/people.reducer';



export enum actionsNames  {
  LOAD_DATA = '[ App component ] Load data',
  LOADED_DATA = '[ App component ] Loaded data',
  SORT_DATA = '[ App component ] Sort data',
  LOAD_MORE_DATA = '[ App component ] Load more data',
  LOADED_MORE_DATA = '[ App component ] Loaded more data',
}

export const loadData = createAction(actionsNames.LOAD_DATA);

export const loadedData = createAction(actionsNames.LOADED_DATA, props<{payload: IResponse<IPeople>}>());

export const sortPeople = createAction(actionsNames.SORT_DATA, props<{sortBy: keyof typeof sortByEnum}>());

export const loadMoreData = createAction(actionsNames.LOAD_MORE_DATA);
export const loadedMoreData = createAction(actionsNames.LOADED_MORE_DATA, props<{payload: IResponse<IPeople>}>());
