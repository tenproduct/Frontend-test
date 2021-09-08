import { createAction, props } from '@ngrx/store';

import { SwapiResponse } from '../models/swapi';

const PREFIX = '[SW APP]';

export const fetchPeople = createAction(`${PREFIX} Fetch People`);

export const fetchPeopleSuccess = createAction(`${PREFIX} Fetch People Success`, props<{ response: SwapiResponse }>());

export const fetchPeopleFailed = createAction(`${PREFIX} Fetch People Failed`);
