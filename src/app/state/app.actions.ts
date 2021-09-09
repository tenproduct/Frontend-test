import { createAction, props } from '@ngrx/store';

import { Sort, SwapiResponse } from '../models';

const PREFIX = '[SW APP]';

export const fetchPeople = createAction(`${PREFIX} Fetch People`);

export const fetchPeopleSuccess = createAction(`${PREFIX} Fetch People Success`, props<{ response: SwapiResponse }>());

export const fetchPeopleFailed = createAction(`${PREFIX} Fetch People Failed`);

export const fetchMorePeople = createAction(`${PREFIX} Fetch More People`);

export const searchTermChange = createAction(`${PREFIX} SearchTerm Changed`, props<{ searchTerm: string }>());

export const sortChange = createAction(`${PREFIX} Sort Changed`, props<{ sort: Sort }>());
