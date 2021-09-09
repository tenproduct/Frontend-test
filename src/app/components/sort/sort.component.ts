import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Sort } from '../../models';

@Component({
    selector: 'app-sort',
    templateUrl: './sort.component.html',
    styleUrls: ['./sort.component.scss']
})
export class SortComponent {
    @Input()
    public sort: Sort;

    @Output()
    public change: EventEmitter<Sort>;

    public Sort = Sort;

    public sortValues = Object.values(Sort).filter((key) => typeof key !== 'string');

    constructor() {
        this.change = new EventEmitter();
    }

    public valueChange(value: Sort): void {
        this.change.next(value);
    }
}
