import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { selectIsLoading, AppState } from '@shared/store';

@Component({
    selector: 'app-loading-indicator',
    templateUrl: './loading-indicator.component.html',
    styleUrls: ['./loading-indicator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingIndicatorComponent {
    public isLoading$: Observable<boolean>;

    constructor(private store: Store<AppState>) {
        this.isLoading$ = this.store.select(selectIsLoading).pipe(delay(0));
    }
}
