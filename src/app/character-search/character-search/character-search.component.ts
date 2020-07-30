import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-character-search',
    templateUrl: './character-search.component.html',
    styleUrls: ['./character-search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterSearchComponent{
    constructor() { }
}
