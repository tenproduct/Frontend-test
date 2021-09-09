import { createReducer, on } from '@ngrx/store';

import * as actions from './app.actions';
import { Sort, SWPerson } from '../models';

export interface AppState {
    count: number;
    nextPage: number;
    people: SWPerson[];
    searchTerm: string;
    sort: Sort;
}

export const initialState: AppState = {
    count: 0,
    nextPage: 1,
    people: [],
    searchTerm: '',
    sort: Sort['A-Z']
};

export const rootStateKey = 'state';

const appReducer = createReducer(
    initialState,
    on(actions.fetchPeopleSuccess, (state, { response }) => {
        const nextPageUrl = response.next ? new URL(response.next) : null;
        const people = state.nextPage > 1 ? [...state.people, ...response.results] : [...response.results];

        return {
            ...state,
            count: response.count,
            nextPage: nextPageUrl ? +nextPageUrl.searchParams.get('page') : null,
            people: people.sort(sortPredicates[Sort[state.sort]])
        };
    }),
    on(actions.searchTermChange, (state, { searchTerm }) => {
        return {
            ...state,
            nextPage: 1,
            searchTerm
        };
    }),
    on(actions.sortChange, (state, { sort }) => {
        return {
            ...state,
            sort,
            people: [...state.people].sort(sortPredicates[Sort[sort]])
        };
    })
);

export function reducer(state, action) {
    return appReducer(state, action);
}

const sortPredicates = {
    'A-Z': (a: SWPerson, b: SWPerson) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1),
    'Z-A': (a: SWPerson, b: SWPerson) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1),
    Male: (a: SWPerson) => (a.gender === 'male' ? -1 : 1),
    Female: (a: SWPerson) => (a.gender === 'female' ? -1 : 1)
};
