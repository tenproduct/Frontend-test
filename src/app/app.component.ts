import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as actions from './store/actions/people.actions';
import {getAmountOfAllPeople, selectPeople} from './store/selectors/people.selectors';
import {State} from './store/reducers';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';
import {MatSelectChange} from '@angular/material/select';
import {sortByEnum} from './store/reducers/people.reducer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  public title = 'Star Wars App!';
  public people$ = this.store.select(selectPeople);
  public counter$ = this.store.select(getAmountOfAllPeople);
  public searchControl = new FormControl();
  public filteredOptions: Observable<any[]>;
  sortedValue = [
    {value: sortByEnum['A-Z'], viewValue: 'A-Z'},
    {value: sortByEnum['Z-A'], viewValue: 'Z-A'},
    {value: sortByEnum.male, viewValue: 'Male'},
    {value: sortByEnum.female, viewValue: 'Female'}
  ];

  constructor(public store: Store<State>) {}

  ngOnInit() {
    console.log(this.sortedValue);
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      switchMap((value) => this.people$.pipe(
        map((peopleArray) => {
          return this._filter(value, peopleArray.map(item => item.name));
        })
      ))
    );

    this.store.dispatch(actions.loadData());

    this.people$.subscribe(data => {
      console.log(data);
    });
  }

  private _filter(value: string, nameArray: string[]): string[] {
    const filterValue = value.toLowerCase();
    return nameArray.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  loadMorePeople() {
    this.store.dispatch(actions.loadMoreData());
  }

  sortByValue(event: MatSelectChange) {
    const value = (event.value as keyof typeof sortByEnum);
    this.store.dispatch(actions.sortPeople({sortBy: value}));
  }
}
