import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';

import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, skip } from 'rxjs/operators';

import { AppState, characterSearchTermChangeAction } from '@shared/store';
import { untilDestroyed } from '@shared/operators';

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFieldComponent implements OnDestroy {
    private appliedCharacterSearchTerm$: BehaviorSubject<string>;
    public characterSearchTerm: string;

    constructor(private store: Store<AppState>) {
        this.appliedCharacterSearchTerm$ = new BehaviorSubject<string>('');
        this.characterSearchTerm = '';

        this.appliedCharacterSearchTerm$.pipe(
            distinctUntilChanged(),
            skip(1),
            untilDestroyed(this)
        ).subscribe(characterSearchTerm => {
            this.store.dispatch(characterSearchTermChangeAction({ characterSearchTerm }));
        });
    }

    public ngOnDestroy(): void { }

    public search(): void {
        this.appliedCharacterSearchTerm$.next(this.characterSearchTerm);
    }

    public clearSearch(): void {
        this.characterSearchTerm = '';
        this.search();
    }
}
