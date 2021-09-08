import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectPeople } from './state/app.selectors';
import { SWPerson } from './models';
import { fetchPeople } from './state/app.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Star Wars App!';

    public people$: Observable<SWPerson[]>;

    constructor(private store: Store) {
        this.people$ = this.store.select(selectPeople);
    }

    ngOnInit() {
        this.store.dispatch(fetchPeople());
    }
}
