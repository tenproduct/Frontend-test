import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getCharactersAction } from '../../store/actions/getCharacters.action';
import { countSelector, errorSelector, dataSelector, isSearchSelector, searchDataSelector, searchCountSelector, sortBySelector } from '../../store/selectors';
import { SWCharacterInterface } from '../../types/swCharacter.interface';
import { SortType } from '@sw-models/type.enum';

@Component({
  selector: 'app-sw',
  templateUrl: './sw.component.html',
  styleUrls: ['./sw.component.scss']
})
export class SwComponent implements OnInit {
  public error$: Observable<string | null>;
  public count$: Observable<number>;
  public data$: Observable<SWCharacterInterface[] | null>;
  public isSearch$: Observable<boolean>;
  public searchList$: Observable<SWCharacterInterface[]>;
  public searchCount$: Observable<number>;
  public sortBy$: Observable<SortType>;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this._initValues();
    this._fetchData();
  }

  private _initValues(): void {
    this.error$ = this.store.pipe(select(errorSelector));
    this.count$ = this.store.pipe(select(countSelector));
    this.data$ = this.store.pipe(select(dataSelector));
    this.isSearch$ = this.store.pipe(select(isSearchSelector));
    this.searchList$ = this.store.pipe(select(searchDataSelector));
    this.searchCount$ = this.store.pipe(select(searchCountSelector));
    this.sortBy$ = this.store.pipe(select(sortBySelector));
  }

  private _fetchData(): void {
    this.store.dispatch(getCharactersAction());
  }
}
