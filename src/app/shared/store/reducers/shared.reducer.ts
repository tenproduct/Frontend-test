import { on, createReducer } from '@ngrx/store';

import {
    characterSearchTermChangeAction,
    getCharactersSuccessAction,
    startLoadingAction,
    stopLoadingAction
} from '../actions/shared.actions';
import { characterAdapter } from '../entity-adapters/character.adapter';
import { SharedState } from '../app.state';

export const initialSharedState: SharedState = {
    characters: characterAdapter.getInitialState(),
    characterCount: 0,
    nextPageUrl: null,
    characterSearchTerm: '',
    loadingCount: 0
};

export const sharedReducer = createReducer(
    initialSharedState,

    on(startLoadingAction, state => ({
        ...state,
        loadingCount: state.loadingCount + 1
    })),

    on(stopLoadingAction, state => ({
        ...state,
        loadingCount: state.loadingCount - 1
    })),

    on(characterSearchTermChangeAction, (state, { characterSearchTerm }) => ({
        ...state,
        characterSearchTerm
    })),

    on(getCharactersSuccessAction, (state, { getCharactersResponse }) => ({
        ...state,
        characterCount: getCharactersResponse.count,
        nextPageUrl: getCharactersResponse.next,
        characters: getCharactersResponse.previous
            ? characterAdapter.addMany(getCharactersResponse.results, state.characters)
            : characterAdapter.setAll(getCharactersResponse.results, state.characters)
    }))
);
