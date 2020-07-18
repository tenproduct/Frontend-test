import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SortOption } from '../../enums/sort-option';
import { StarWarsReducer, StarWarsSelectors, StarWarsStateActions } from '../../state';

@Component({
  selector: 'app-character-sort',
  templateUrl: './character-sort.component.html',
  styleUrls: ['./character-sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterSortComponent implements OnInit {

  SortOption = SortOption;

  sortOption$: Observable<SortOption>;

  constructor(private store: Store<StarWarsReducer.State>) {
  }

  ngOnInit(): void {
    this.sortOption$ = this.store.pipe(select(StarWarsSelectors.selectSortOption));
  }

  sortCharacters(sortOption: SortOption): void {
    this.store.dispatch(new StarWarsStateActions.ChangeSortOption(sortOption));
  }

}
