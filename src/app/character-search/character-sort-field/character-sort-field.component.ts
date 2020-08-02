import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { first, filter } from 'rxjs/operators';

import { AppState, characterSortChangeAction, selectCanLoadMore, loadAllCharactersAction } from '@shared/store';
import { CharacterSort } from '@shared/models';
import { SortWarningDialogComponent } from './sort-warning-dialog/sort-warning-dialog.component';

interface SortOption {
    value: CharacterSort;
    displayValue: string;
}

@Component({
    selector: 'app-character-sort-field',
    templateUrl: './character-sort-field.component.html',
    styleUrls: ['./character-sort-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterSortFieldComponent {
    public options: SortOption[];
    public sortOption: string;
    public canLoadMore$: Observable<boolean>;

    constructor(private store: Store<AppState>, private dialog: MatDialog) {
        this.canLoadMore$ = this.store.select(selectCanLoadMore);
        this.options = [
            { value: CharacterSort.NameAsc, displayValue: 'A-Z' },
            { value: CharacterSort.NameDesc, displayValue: 'Z-A' },
            { value: CharacterSort.Male, displayValue: 'Male' },
            { value: CharacterSort.Female, displayValue: 'Female' }
        ];
    }

    public sortOptionChange(change: MatSelectChange): void {
        this.canLoadMore$.pipe(first()).subscribe(canLoadMore => {
            if (!this.sortOption && canLoadMore) {
                this.openSortWarningDialog();
            }

            this.sortOption = change.value;
            this.store.dispatch(characterSortChangeAction({ characterSort: change.value }));
        });
    }

    public openSortWarningDialog(): void {
        this.dialog.open(SortWarningDialogComponent)
            .afterClosed()
            .pipe(filter(loadAllCharacters => loadAllCharacters))
            .subscribe(() => {
                this.store.dispatch(loadAllCharactersAction());
            });
    }
}
