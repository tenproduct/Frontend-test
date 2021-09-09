import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    @Input()
    public searchTerm: string;

    @Output()
    public search: EventEmitter<string>;

    constructor() {
        this.search = new EventEmitter();
    }

    public onSearch(searchTerm: string): void {
        this.search.next(searchTerm);
    }
}
