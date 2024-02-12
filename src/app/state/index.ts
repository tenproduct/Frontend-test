import { ActionReducerMap } from '@ngrx/store';
import { AppStoreEnum } from '../core/enums/appStoreEnum';
import { CharactersState } from '../core/models/characters-state.model';
import { charactersReducer } from './characters/characters.reducer';
import { CHARACTERS_STATE_NAME } from './characters/characters.state';

export interface AppState {
  [CHARACTERS_STATE_NAME]: CharactersState;
}

export const reducers: ActionReducerMap<AppState> = {
  [CHARACTERS_STATE_NAME]: charactersReducer,
};
