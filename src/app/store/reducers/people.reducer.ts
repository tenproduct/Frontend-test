import { createReducer, on } from '@ngrx/store';
import * as PeopleActions from '../actions/people.actions';
import { IPeopleState } from '../state.models';

export const initialState: IPeopleState = {
  people: [],
  nextPage: null,
  prevPage: null,
  loading: false
};


export const PeopleReducer = createReducer(
  initialState,
  on(PeopleActions.loadPeople, (state) => ({...state, loading: true})),
  on(PeopleActions.loadedPeople, (state, {payload}) => ({
    ...state,
    people: [...payload],
    loading: false,
  })),
);
