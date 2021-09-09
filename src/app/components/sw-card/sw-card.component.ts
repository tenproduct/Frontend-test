import { Component, Input } from '@angular/core';

import { SWPerson } from '../../models/swapi';

@Component({
    selector: 'app-sw-card',
    templateUrl: './sw-card.component.html',
    styleUrls: ['./sw-card.component.scss']
})
export class SwCardComponent {
    @Input()
    public person: SWPerson;

    @Input()
    public isOdd: boolean;
}
