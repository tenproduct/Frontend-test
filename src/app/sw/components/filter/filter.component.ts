import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SortOption } from '@sw-models/interfaces';
import { SortType } from '@sw-models/type.enum';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { sortByAction } from '../../store/actions/getCharacters.action';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {
  public readonly destroy$ = new Subject<void>();
  public sortForm: FormGroup;
  public sortOptions: SortOption[] = [
    { value: SortType.Asc, viewValue: 'A-Z' },
    { value: SortType.Desc, viewValue: 'Z-A' },
    { value: SortType.Male, viewValue: 'Male' },
    { value: SortType.Female, viewValue: 'Female' }
  ];

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _store: Store<any>,
  ) {
    this.sortForm = this._fb.group({
      selectedOption: ['']
    });
  }

  ngOnInit(): void {
    this._subscribeOnSortUpdate();
  }

  private _subscribeOnSortUpdate(): void {
    this.sortForm.get('selectedOption').valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(sortBy => this._store.dispatch(sortByAction({ sortBy })));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
