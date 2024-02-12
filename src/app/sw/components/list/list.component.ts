import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SortType } from '@sw-models/type.enum';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { SWCharacterInterface } from '../../types/swCharacter.interface';
import { loadMoreCharactersAction } from '../../store/actions/getCharacters.action';
import {
  dataSelector,
  isLoadingSelector,
  isSearchSelector,
  nextSelector,
  searchDataSelector,
  sortBySelector
} from '../../store/selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public nextUrl$: Observable<string>;
  public sortBy$: Observable<SortType>;
  public isSearch$: Observable<boolean>;
  public isLoading$: Observable<boolean>;
  public list$: Observable<SWCharacterInterface[]>;
  public searchList$: Observable<SWCharacterInterface[]>;

  constructor(private readonly _store: Store<any>) {}

  ngOnInit(): void {
    this.list$ = this._store.pipe(select(dataSelector));
    this.nextUrl$ = this._store.pipe(select(nextSelector));
    this.sortBy$ = this._store.pipe(select(sortBySelector));
    this.isSearch$ = this._store.pipe(select(isSearchSelector));
    this.isLoading$ = this._store.pipe(select(isLoadingSelector));
    this.searchList$ = this._store.pipe(select(searchDataSelector));
  }

  public onLoadMore(): void {
    this.nextUrl$
      .pipe(
        take(1),
        tap((url: string) => this._store.dispatch(loadMoreCharactersAction({ url }))),
      )
      .subscribe();
  }
}
