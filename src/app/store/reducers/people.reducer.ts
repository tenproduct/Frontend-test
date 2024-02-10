import { createReducer, on } from '@ngrx/store';
import * as PeopleActions from '../actions/people.actions';
import {IPeople, IPeopleState} from '../state.models';

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
    let sortedResult = [...payload.results];

    if (state.sortBy) {
      sortedResult = sortByFn(sortedResult, state.sortBy);
    }

    return {
      ...state,
      nextPage: payload.next,
      prevPage: payload.previous,
      people: sortedResult,
      loading: false
    };
  }),
  on(PeopleActions.sortPeople, (state, {sortBy}) => {

    return {
      ...state,
      people: sortByFn([...state.people], sortBy),
      sortBy: sortByEnum[sortBy]
    };
  })
);

export enum sortByEnum {
  'A-Z' = 'A-Z',
  'Z-A' = 'Z-A',
  male = 'male',
  female = 'female'
}


const sortByFn = (people: Array<IPeople>, type: keyof typeof sortByEnum) => {
  people.sort((a, b) => {
    const sorting = {
      [sortByEnum.male]: b.gender === sortByEnum.male,
      [sortByEnum.female]: b.gender === sortByEnum.female,
      [sortByEnum['A-Z']]: a.name > b.name,
      [sortByEnum['Z-A']]: a.name < b.name,

    };
    return (sorting[type] ? 1 : -1);
  });
  return people;
};



