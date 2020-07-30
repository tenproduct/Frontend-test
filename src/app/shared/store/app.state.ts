import { DEFAULT_ROUTER_FEATURENAME, RouterReducerState } from '@ngrx/router-store';
import { EntityState } from '@ngrx/entity';

import { Character } from '@shared/models';

export interface SharedState {
    characters: EntityState<Character>;
    characterCount: number;
    nextPageUrl: string;
}

export interface AppState {
    [DEFAULT_ROUTER_FEATURENAME]: RouterReducerState;
    shared: SharedState;
}
