import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StarWarsReducer, StarWarsSelectors, StarWarsStateActions } from '../../state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarWarsComponent implements OnInit {

  characters$: Observable<Character[]>;

  count$: Observable<number>;
  visibleCount$: Observable<number>;
  hasMoreItems$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<StarWarsReducer.State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new StarWarsStateActions.LoadLoadCharacters());
    this.characters$ = this.store.pipe(select(StarWarsSelectors.selectCharacters));
    this.count$ = this.store.pipe(select(StarWarsSelectors.selectCharactersCount));
    this.visibleCount$ = this.store.pipe(select(StarWarsSelectors.selectVisibleCharactersCount));
    this.hasMoreItems$ = this.store.pipe(select(StarWarsSelectors.selectHasMoreItems));
    this.isLoading$ = this.store.pipe(select(StarWarsSelectors.selectIsLoading));
  }

  loadMore(): void {
    this.store.dispatch(new StarWarsStateActions.LoadMore());
  }

}
