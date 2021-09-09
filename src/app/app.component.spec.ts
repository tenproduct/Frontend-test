import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { cold } from 'jasmine-marbles';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { SortComponent } from './components/sort/sort.component';
import { SwCardComponent } from './components/sw-card/sw-card.component';
import { Sort, SwapiResponse, SWPerson } from './models';
import { reducer, rootStateKey } from './state/app.state';
import { SwapiService } from './services';
import { Observable, of } from 'rxjs';
import { AppEffects } from './state/app.effects';
import { MOCK_PEOPLE } from './test';

const MOCK_RESPONSE = { count: 2, results: MOCK_PEOPLE, next: 'http://mock.api?page=2', previous: null };

class MockSwapiService extends SwapiService {
    getPeople(page: number = 1, search: string = ''): Observable<SwapiResponse> {
        return of<SwapiResponse>(MOCK_RESPONSE);
    }
}

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, SearchComponent, SortComponent, SwCardComponent],
            imports: [
                MatToolbarModule,
                StoreModule.forRoot({ [rootStateKey]: reducer }),
                EffectsModule.forRoot([AppEffects]),
                HttpClientTestingModule
            ],
            providers: [{ provide: SwapiService, useClass: MockSwapiService }]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    describe('sort', () => {
        it('by A-Z', () => {
            component.onSortChange(Sort['A-Z']);
            const expected = cold('(a)', { a: [MOCK_PEOPLE[1], MOCK_PEOPLE[0]] });

            expect(component.people$).toBeObservable(expected);
        });

        it('by Z-A', () => {
            component.onSortChange(Sort['Z-A']);
            const expected = cold('(a)', { a: [MOCK_PEOPLE[0], MOCK_PEOPLE[1]] });

            expect(component.people$).toBeObservable(expected);
        });

        it('by Male', () => {
            component.onSortChange(Sort.Male);
            const expected = cold('(a)', { a: [MOCK_PEOPLE[0], MOCK_PEOPLE[1]] });

            expect(component.people$).toBeObservable(expected);
        });

        it('by Female', () => {
            component.onSortChange(Sort.Female);
            const expected = cold('(a)', { a: [MOCK_PEOPLE[1], MOCK_PEOPLE[0]] });

            expect(component.people$).toBeObservable(expected);
        });
    });

    it('should load more', () => {
        component.onLoadMore();
        const expected = cold('(a)', { a: [MOCK_PEOPLE[1], MOCK_PEOPLE[1], MOCK_PEOPLE[0], MOCK_PEOPLE[0]] });

        expect(component.people$).toBeObservable(expected);
    });
});
