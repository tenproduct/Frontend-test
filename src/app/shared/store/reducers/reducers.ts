import { InjectionToken } from '@angular/core';

import { DEFAULT_ROUTER_FEATURENAME, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { sharedReducer } from './shared.reducer';
import { AppState } from '../app.state';

export const sharedReducers: ActionReducerMap<AppState> = {
    [DEFAULT_ROUTER_FEATURENAME]: routerReducer,
    shared: sharedReducer
};

export const SHARED_REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Shared Reducers');
