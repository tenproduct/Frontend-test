import { DEFAULT_ROUTER_FEATURENAME, RouterReducerState } from '@ngrx/router-store';
import { EntityState } from '@ngrx/entity';

import { Character, CharacterSort } from '@shared/models';

export interface SharedState {
    characters: EntityState<Character>;
    characterCount: number;
    nextPageUrl: string;
    characterSearchTerm: string;
    loadingCount: number;
    characterSort: CharacterSort;
}

export interface AppState {
    [DEFAULT_ROUTER_FEATURENAME]: RouterReducerState;
    shared: SharedState;
}
