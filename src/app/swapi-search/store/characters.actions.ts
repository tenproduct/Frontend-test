import { createAction, props } from '@ngrx/store';
import { IPplResponse } from '../interfaces/swapi-ppl-response.interface';
import { SortType } from '../enums/sort-type.enum';
import { SortDirection } from '../enums/sort-direction.enum';

export const fetchCharacters = createAction(
  'Fetch Characters'
);

export const fetchCharactersSuccess = createAction(
  'Fetch Characters Success',
  props<{
    response: IPplResponse
  }>()
);

export const fetchCharactersError = createAction(
  'Fetch Characters Error',
  props<{
    errorMessage: string
  }>()
);

export const fetchNextPage = createAction(
  'Fetch Next Page of Characters',
  props<{
    nextPageUrl: string;
  }>()
);

export const fetchNextPageSuccess = createAction(
  'Fetch Next Page of Characters Success',
  props<{
    response: IPplResponse
  }>()
);

export const fetchNextPageError = createAction(
  'Fetch Next Page of Characters Error',
  props<{
    errorMessage: string
  }>()
);

export const searchCharacters = createAction(
  'Search Characters',
  props<{
    searchTerm: string;
  }>()
);

export const searchCharactersSuccess = createAction(
  'Search Characters Success',
  props<{
    response: IPplResponse
  }>()
);

export const searchCharactersError = createAction(
  'Search Characters Success',
  props<{
    errorMessage: string;
  }>()
);

export const sortCharacters = createAction(
  'Sort Characters',
  props<{
    key: SortType,
    direction: SortDirection
  }>()
);


