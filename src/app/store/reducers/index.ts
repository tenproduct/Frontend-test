import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { PeopleReducer } from './people.reducer';
import { IPeopleState } from '../state.models';

export interface State {
  PeopleReducer: IPeopleState;
}

export const reducers: ActionReducerMap<State> = {
  PeopleReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
