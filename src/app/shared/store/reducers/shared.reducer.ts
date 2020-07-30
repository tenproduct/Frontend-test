import { on, createReducer } from '@ngrx/store';

import { getCharactersSuccessAction } from '../actions/shared.actions';
import { characterAdapter } from '../entity-adapters/character.adapter';
import { SharedState } from '../app.state';

export const initialSharedState: SharedState = {
    characters: characterAdapter.getInitialState(),
    characterCount: 0,
    nextPageUrl: null
};

export const sharedReducer = createReducer(
    initialSharedState,
    on(getCharactersSuccessAction, (state, { getCharactersResponse }) => ({
        ...state,
        characterCount: getCharactersResponse.count,
        nextPageUrl: getCharactersResponse.next,
        characters: getCharactersResponse.previous
            ? characterAdapter.addMany(getCharactersResponse.results, state.characters)
            : characterAdapter.setAll(getCharactersResponse.results, state.characters)
    }))
);
