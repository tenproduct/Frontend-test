import { createAction, props } from "@ngrx/store";
import { Characters } from "./characters.models";

export const getCharacters = createAction(
  "[Character | API] GET Characters request"
);

export const searchCharacters = createAction(
  "[Character | API] GET Characters request search",
  props<{ search: string; url?: string }>()
);

export const sortCharacters = createAction(
  "[Character | Collection] sort Characters request",
  props<{ sort: SortBy }>()
);

export const getMoreCharacters = createAction(
  "[Character | API] GET more Characters request",
  props<{ payload: { url: string } }>()
);

export const addCharacters = createAction(
  "[Character | API] add Characters",
  props<{ payload: Characters }>()
);

export const setCharactersSuccess = createAction(
  "[Character | API] GET Characters request success",
  props<{ payload: Characters }>()
);

export const setCharactersLoading = createAction(
  "[Character ] Characters loading status"
);

export const setCharactersFailed = createAction(
  "[Character | API] GET Characters request failed",
  props<{ payload: { error: any } }>()
);

export type SortBy = "A-Z" | "Z-A" | "Male" | "Female";
