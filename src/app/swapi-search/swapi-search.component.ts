import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as CharacterActions from './store/characters.actions';
import { Observable, Subject } from 'rxjs';
import { Character } from './models/swapi-ppl-character.model';
import { SortDirection } from './enums/sort-direction.enum';
import { SortType } from './enums/sort-type.enum';
import * as fromCharacterSelectors from './store/characters.selectors';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-swapi-search',
  templateUrl: './swapi-search.component.html',
  styleUrls: ['./swapi-search.component.scss']
})
export class SwapiSearchComponent implements OnInit, OnDestroy {

  private readonly destroy$ = new Subject<void>();

  sortedCharacterData$: Observable<Character[]>;
  totalCount$: Observable<number>;
  nextPage$: Observable<string>;
  isLoading$: Observable<boolean>;
  sortType$: Observable<SortType>;
  sortDirection$: Observable<SortDirection>;
  errorMsg$: Observable<string>;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.fetchData();
    this.collectData();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private fetchData(): void {
    this.store.dispatch(CharacterActions.fetchCharacters());
  }

  private collectData(): void {
    this.sortedCharacterData$ = this.store
    .pipe(
      takeUntil(this.destroy$),
      select(fromCharacterSelectors.selectSortedCharacterData)
    );

    this.totalCount$ = this.store
    .pipe(
      takeUntil(this.destroy$),
      select(fromCharacterSelectors.selectCharacterTotalCount)
    );

    this.nextPage$ = this.store
    .pipe(
      takeUntil(this.destroy$),
      select(fromCharacterSelectors.selectCharacterNextPage)
    );

    this.isLoading$ = this.store
    .pipe(
      takeUntil(this.destroy$),
      select(fromCharacterSelectors.selectIsLoading)
    );

    this.sortType$ = this.store
    .pipe(
      takeUntil(this.destroy$),
      select(fromCharacterSelectors.selectCharacterSortType)
    );

    this.sortDirection$ = this.store
    .pipe(
      takeUntil(this.destroy$),
      select(fromCharacterSelectors.selectCharacterSortDirection)
    );

    this.errorMsg$ = this.store
    .pipe(
      takeUntil(this.destroy$),
      select(fromCharacterSelectors.selectErrorMsg)
    );

  }
}
