import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { StarWarsReducer, StarWarsStateActions } from '../../state';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})
export class CharacterSearchComponent implements OnDestroy {

  searchValue = '';
  searchChanged: Subject<string> = new Subject<string>();

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store<StarWarsReducer.State>) {
    this.searchChanged.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe((search: string) => {
      this.searchValue = search;
      this.search();
    });
  }

  changed(value: string): void {
    this.searchChanged.next(value);
  }

  search(): void {
    this.store.dispatch(new StarWarsStateActions.LoadLoadCharacters(this.searchValue));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
