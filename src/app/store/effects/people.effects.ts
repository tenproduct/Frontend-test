import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {actionsNames} from '../actions/people.actions';
import {SwapiService} from '../../services/swapi.service';
import {catchError, exhaustMap, map, switchAll, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {combineLatest, EMPTY, forkJoin, of} from 'rxjs';
import * as selectors from '../selectors/people.selectors';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {State} from '../reducers';
import {IResponse} from '../../models/config.model';
import {IPeople} from '../state.models';

@Injectable()
export class PeopleEffects {
  loadData$ = createEffect(() => (
    this.actions$
      .pipe(
        ofType(actionsNames.LOAD_DATA),
        exhaustMap(() => this.swService.getData().pipe(
          map((data) => ({
            type: actionsNames.LOADED_DATA,
            payload: data
          })),
          catchError(() => EMPTY)
        ))

      )
    )
  );

  loadMoreData$ = createEffect(() => (
    this.actions$
      .pipe(
        ofType(actionsNames.LOAD_MORE_DATA),
        withLatestFrom(this.store.select(selectors.loadNextSliceData)),
        exhaustMap(([type, {people, nextPage}]) => {
          return this.http.get<IResponse<IPeople>>(nextPage)
            .pipe(
              map((data) => ({
                type: actionsNames.LOADED_MORE_DATA,
                payload: {
                  ...data,
                  results: [...people, ...data.results]
                }
              })),
              catchError(() => EMPTY)
            );
        }),
      )
  ));

  constructor(
    private actions$: Actions,
    private swService: SwapiService,
    private http: HttpClient,
    private store: Store<State>
  ) {
  }
}
