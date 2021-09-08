import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SwapiService } from './services';
import { SWPerson } from './models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Star Wars App!';

    public people$: Observable<SWPerson[]>;

    constructor(private swapi: SwapiService) {
        this.people$ = swapi.getPeople().pipe(map((response) => response.results));
    }
}
