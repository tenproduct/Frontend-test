import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Character } from '@shared/models';

@Component({
    selector: 'app-character-card',
    templateUrl: './character-card.component.html',
    styleUrls: ['./character-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent {
    @Input() public character: Character;
    @Input() public odd: boolean;

    constructor() { }
}
