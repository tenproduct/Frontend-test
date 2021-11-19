import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { iif, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";

import {
  addCharacters,
  getCharacters,
  getMoreCharacters,
  searchCharacters,
  setCharactersFailed,
  setCharactersLoading,
  setCharactersSuccess,
} from "./characters.actions";
import { Characters } from "./characters.models";

@Injectable()
export class CharactersEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly httpClient: HttpClient
  ) {}

  getCharacters$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(getCharacters),
      act({
        project: () =>
          this.httpClient
            .get<Characters>(`${environment.baseUri}/people/`, {
              responseType: "json",
            })
            .pipe(
              map((response) => setCharactersSuccess({ payload: response }))
            ),
        error: (error) => setCharactersFailed({ payload: { error } }),
      })
    )
  );

  getMoreCharacters$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(getMoreCharacters),
      act({
        project: (payload) => {
          return this.httpClient
            .get<Characters>(payload.payload.url, {
              responseType: "json",
            })
            .pipe(map((response) => addCharacters({ payload: response })));
        },
        error: (error) => setCharactersFailed({ payload: { error } }),
      })
    )
  );

  searchCharacters$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(searchCharacters),
      act({
        project: (payload) => {
          const url =
            payload.url ??
            `${environment.baseUri}/people/?search=${payload.search}`;

          return this.httpClient
            .get<Characters>(url, {
              responseType: "json",
            })
            .pipe(
              map((response) =>
                payload.url
                  ? addCharacters({ payload: response })
                  : setCharactersSuccess({ payload: response })
              )
            );
        },
        error: (error) => setCharactersFailed({ payload: { error } }),
      })
    )
  );
}
