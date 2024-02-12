import { createReducer, on } from '@ngrx/store';
import * as PeopleActions from '../actions/people.actions';
import { IPeopleState } from '../state.models';
import { sortByEnum, sortByFn } from '../../helpers/sortFns';

export const initialState: IPeopleState = {
  people: [],
  nextPage: null,
  prevPage: null,
  loading: false,
  count: 0,
  sortBy: null
};

export const PeopleReducer = createReducer(
  initialState,
  on(PeopleActions.loadData, (state) => ({...state, loading: true})),
  on(PeopleActions.loadedData, (state, {payload}) => ({
    ...state,
    people: [...payload.results],
    nextPage: payload.next,
    prevPage: payload.previous,
    count: payload.count,
    loading: false,
  })),
  on(PeopleActions.loadMoreData, (state) => ({...state, loading: true})),
  on(PeopleActions.loadedMoreData, (state, {payload}) => {
    return {
      ...state,
      nextPage: payload.next,
      prevPage: payload.previous,
      people: !!state.sortBy ? sortByFn([...payload.results], state.sortBy) : [...payload.results],
      loading: false
    };
  }),
  on(PeopleActions.sortPeople, (state, {sortBy}) => ({
      ...state,
      people: sortByFn([...state.people], sortBy),
      sortBy: sortByEnum[sortBy]
  }))
);







