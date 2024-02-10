import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {SWCharacter} from '../../core/models/character-response.model';
import {
  selectCharacters,
  selectCharactersLoadingStatus,
  selectNextPage,
  selectSearchTerm
} from '../../state/app.selectors';
import {Store} from '@ngrx/store';
import {getCharacters, loadMoreCharacters, searchCharacters} from '../../state/app.actions';

@Component({
  selector: 'sw-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  public characters$: Observable<SWCharacter[]>;
  public characterListIsLoaded$: Observable<boolean>;
  public nextPage$: Observable<number>;
  public searchTerm$: Observable<string>;

  constructor(private readonly store$: Store) {
    this.characters$ = this.store$.select(selectCharacters);
    this.characterListIsLoaded$ = this.store$.select(selectCharactersLoadingStatus);
    this.nextPage$ = this.store$.select(selectNextPage);
    this.searchTerm$ = this.store$.select(selectSearchTerm);
  }

  ngOnInit(): void {
    this.store$.dispatch(getCharacters());
  }

  public onLoadMore(): void {
    this.store$.dispatch(loadMoreCharacters());
  }
  public onSearch(search: string): void {
    this.store$.dispatch(searchCharacters({search}));
  }
}
