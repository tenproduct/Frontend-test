import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import {Store} from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { debounce, map, startWith, switchMap} from 'rxjs/operators';
import * as actions from './store/actions/people.actions';
import * as selectors from './store/selectors/people.selectors';
import { State } from './store/reducers';
import { interval, Observable} from 'rxjs';
import { sortByEnum, sortedValue } from './helpers/sortFns';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  public title = 'Star Wars Character Search';
  public people$ = this.store.select(selectors.selectPeople);
  public counter$ = this.store.select(selectors.getAmountOfAllPeople);
  public isNextPageAvailable$ = this.store.select(selectors.loadNextSliceData);

  public searchControl = new FormControl();
  public filteredOptions: Observable<any[]>;

  sortedValue = sortedValue;

  constructor(public store: Store<State>) {}

  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounce(() => interval(300)),
      switchMap((value) => this.people$.pipe(
        map((peopleArray) => {
          return this._filter(value, peopleArray.map(item => item.name));
        })
      ))
    );

    this.store.dispatch(actions.loadData());
  }

  public searchInclude(name: string) {
    return !!this.searchControl.value && name.toLowerCase().includes(this.searchControl.value.toLowerCase());
  }

  public loadMorePeople() {
    this.store.dispatch(actions.loadMoreData());
  }

  public sortByValue(event: MatSelectChange) {
    const value = (event.value as keyof typeof sortByEnum);
    this.store.dispatch(actions.sortPeople({sortBy: value}));
  }

  public searchPeople() {
    this.store.dispatch(actions.searchPeople({searchStr: this.searchControl.value}));
  }

  private _filter(value: string, nameArray: string[]): string[] {
    const filterValue = value.toLowerCase();
    return nameArray.filter(option => option.toLowerCase().includes(filterValue));
  }
}
