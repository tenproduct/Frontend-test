import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Sort, SWPerson } from './models';
import * as selectors from './state/app.selectors';
import * as actions from './state/app.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Star Wars App!';

    public people$: Observable<SWPerson[]>;
    public searchTerm$: Observable<string>;
    public sort$: Observable<Sort>;

    constructor(private store: Store) {
        this.people$ = this.store.select(selectors.selectPeople);
        this.searchTerm$ = this.store.select(selectors.selectSearchTerm);
        this.sort$ = this.store.select(selectors.selectSort);
    }

    ngOnInit() {
        this.store.dispatch(actions.fetchPeople());
    }

    public onSearch(searchTerm: string) {
        this.store.dispatch(actions.searchTermChange({ searchTerm }));
    }

    public onSortChange(sort: Sort) {
        this.store.dispatch(actions.sortChange({ sort }));
    }
}
