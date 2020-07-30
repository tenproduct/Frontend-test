import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState, selectCharacters } from '@shared/store';
import { Character } from '@shared/models';

@Component({
    selector: 'app-character-search',
    templateUrl: './character-search.component.html',
    styleUrls: ['./character-search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterSearchComponent{
    public characters$: Observable<Character[]>;

    constructor(private store: Store<AppState>) {
        this.characters$ = this.store.pipe(select(selectCharacters));
    }
}
