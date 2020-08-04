import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState, selectCharacters, selectCanLoadMore, selectCharacterCount, loadNextPageAction } from '@shared/store';
import { CharacterInfoComponent, CharacterInfoComponentData } from '@shared/character-info/character-info.component';
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
    public characterCount$: Observable<number>;
    public characters$: Observable<Character[]>;
    public canLoadMore$: Observable<boolean>;

    constructor(private store: Store<AppState>, private dialog: MatDialog) {
        this.characterCount$ = this.store.pipe(select(selectCharacterCount));
        this.characters$ = this.store.pipe(select(selectCharacters));
        this.canLoadMore$ = this.store.pipe(select(selectCanLoadMore));
    }

    public loadNextPage(): void {
        this.store.dispatch(loadNextPageAction());
    }

    public openCharacterInfoDialog(character: Character, odd: boolean): void {
        this.dialog.open<CharacterInfoComponent, CharacterInfoComponentData, void>(CharacterInfoComponent, {
            width: '750px',
            height: '430px',
            maxHeight: '90%',
            panelClass: 'character-info-dialog',
            data: { character, odd }
        });
    }
}
