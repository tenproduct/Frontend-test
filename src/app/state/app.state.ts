import {SWCharacter} from '../core/models/character-response.model';

export interface AppState {
  totalCount: number;
  characters: SWCharacter[];
}

export const initialState: AppState = {
  totalCount: 0,
  characters: []
};

export const rootStateKey = 'state';

