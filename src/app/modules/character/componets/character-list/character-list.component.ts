import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/models/app.model';
import { Character, CharacterSortOption } from '../../models/character.model';
import { LoadCharacters, LoadMoreCharacters, SearchCharacters } from '../../state/actions';
import { selectCharacterList, selectCurrentCharacterCounter, selectTotalCharacterCounter } from '../../state/selectors';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  public selectedCharacterOption: CharacterSortOption;
  public totalCharacterCount$: Observable<number>;
  public currentCharacterCount$: Observable<number>;
  public characterList$: Observable<Character[]>;

  constructor(private store: Store<AppState>) { 
    this.totalCharacterCount$ = store.pipe(select(selectTotalCharacterCounter));
    this.currentCharacterCount$ = store.pipe(select(selectCurrentCharacterCounter));
    this.characterList$ = store.pipe(select(selectCharacterList));
  }

  ngOnInit() {
    this.store.dispatch(new LoadCharacters());
  }

  searchCharacter(search: string) {
    this.store.dispatch(new SearchCharacters(search));
  }

  characterSortOptionChanged(sortOption: CharacterSortOption) {
    this.selectedCharacterOption = sortOption;
  }

  loadMoreCharacters() {
    this.store.dispatch(new LoadMoreCharacters());
  }

}
