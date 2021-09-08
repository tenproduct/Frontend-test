import { createReducer, on } from '@ngrx/store';

import * as actions from './app.actions';
import { SWPerson } from '../models';

export interface AppState {
    count: number;
    nextPage: number;
    people: SWPerson[];
}

export const initialState: AppState = {
    count: 0,
    nextPage: 1,
    people: []
};

export const rootStateKey = 'state';

const appReducer = createReducer(
    initialState,
    on(actions.fetchPeopleSuccess, (state, { response }) => {
        const nextPageUrl = response.next ? new URL(response.next) : null;

        return {
            ...state,
            count: response.count,
            nextPage: nextPageUrl ? +nextPageUrl.searchParams.get('page') : null,
            people: [...state.people, ...response.results]
        };
    })
);

export function reducer(state, action) {
    return appReducer(state, action);
}
