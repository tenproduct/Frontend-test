import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {SWCharacter} from '../../core/models/character-response.model';
import {selectCharacters, selectCharactersLoadingStatus, selectNextPage} from '../../state/app.selectors';
import {Store} from '@ngrx/store';
import {getCharacters, loadMoreCharacters} from '../../state/app.actions';

@Component({
  selector: 'sw-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  public characters$: Observable<SWCharacter[]>;
  public characterListIsLoaded$: Observable<boolean>;
  public nextPage$: Observable<number>;

  constructor(private readonly store$: Store) {
    this.characters$ = this.store$.select(selectCharacters);
    this.characterListIsLoaded$ = this.store$.select(selectCharactersLoadingStatus);
    this.nextPage$ = this.store$.select(selectNextPage);
  }

  ngOnInit(): void {
    this.store$.dispatch(getCharacters());
  }

  public onLoadMore(): void {
    this.store$.dispatch(loadMoreCharacters());
  }
}
