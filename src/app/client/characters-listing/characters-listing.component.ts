import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {getCharacters, loadMoreCharacters, searchCharacters, sortChange} from '../../state/app.actions';
import {Observable} from 'rxjs';
import {SWCharacter} from '../../core/models/character-response.model';
import {
  selectCharacters,
  selectCharactersLoadingStatus,
  selectNextPage,
  selectSearchTerm
} from '../../state/app.selectors';
import {SortTypeEnum} from '../../core/enums/sort-type-enum';

@Component({
  selector: 'sw-characters-listing',
  templateUrl: './characters-listing.component.html',
  styleUrls: ['./characters-listing.component.scss']
})
export class CharactersListingComponent implements OnInit {
  public characters$: Observable<SWCharacter[]>;
  public nextPage$: Observable<number>;
  public characterListIsLoaded$: Observable<boolean>;
  public searchTerm$: Observable<string>;

  constructor(private readonly store$: Store) {
    this.characters$ = this.store$.select(selectCharacters);
    this.nextPage$ = this.store$.select(selectNextPage);
    this.characterListIsLoaded$ = this.store$.select(selectCharactersLoadingStatus);
    this.searchTerm$ = this.store$.select(selectSearchTerm);
  }

  ngOnInit(): void {
    this.store$.dispatch(getCharacters());
  }
  public onLoadMore(): void {
    this.store$.dispatch(loadMoreCharacters());
  }

  onSearch(search: string) {
    this.store$.dispatch(searchCharacters({search}));
  }

  onSort(sortMethod: keyof typeof SortTypeEnum) {
    this.store$.dispatch(sortChange({sortMethod}));
  }
}
