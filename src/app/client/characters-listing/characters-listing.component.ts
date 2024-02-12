import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getCharacters,
  loadMoreCharacters,
  searchCharacters,
  sortChange,
} from '../../state/characters/characters.actions';
import { Observable } from 'rxjs';
import { SWCharacter } from '../../core/models/character-response.model';
import {
  selectCharacters,
  selectCharactersLoadingStatus,
  selectNextPage,
  selectSearchTerm,
  selectTotalCount,
} from '../../state/characters/characters.selectors';
import { SortTypeEnum } from '../../core/enums/sort-type-enum';

@Component({
  selector: 'sw-characters-listing',
  templateUrl: './characters-listing.component.html',
  styleUrls: ['./characters-listing.component.scss'],
})
export class CharactersListingComponent implements OnInit {
  public characters$: Observable<SWCharacter[]> =
    this.store$.select(selectCharacters);
  public nextPage$: Observable<number> = this.store$.select(selectNextPage);
  public characterListIsLoaded$: Observable<boolean> = this.store$.select(
    selectCharactersLoadingStatus,
  );
  public searchTerm$: Observable<string> = this.store$.select(selectSearchTerm);
  public totalCount$: Observable<number> = this.store$.select(selectTotalCount);

  constructor(private readonly store$: Store) {}

  ngOnInit(): void {
    this.store$.dispatch(getCharacters());
  }
  public onLoadMore(): void {
    this.store$.dispatch(loadMoreCharacters());
  }

  onSearch(search: string) {
    this.store$.dispatch(searchCharacters({ search }));
  }

  onSort(sortMethod: keyof typeof SortTypeEnum) {
    this.store$.dispatch(sortChange({ sortMethod }));
  }
}
