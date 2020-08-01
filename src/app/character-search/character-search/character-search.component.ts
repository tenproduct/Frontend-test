import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState, selectCharacters, selectCanLoadMore, loadNextPageAction } from '@shared/store';
import { fadeInAnimation } from '@shared/animations';
import { Character } from '@shared/models';

@Component({
    selector: 'app-character-search',
    templateUrl: './character-search.component.html',
    styleUrls: ['./character-search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [fadeInAnimation]
})
export class CharacterSearchComponent{
    public characters$: Observable<Character[]>;
    public canLoadMore$: Observable<boolean>;

    constructor(private store: Store<AppState>) {
        this.characters$ = this.store.pipe(select(selectCharacters));
        this.canLoadMore$ = this.store.pipe(select(selectCanLoadMore));
    }

    public loadNextPage(): void {
        this.store.dispatch(loadNextPageAction());
    }
}
