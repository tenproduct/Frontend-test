import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SwapiSearchComponent } from './swapi-search/swapi-search.component';
import { SwapiSearchResultComponent } from './swapi-search/components/swapi-search-result/swapi-search-result.component';
import { SwapiSearchFormComponent } from './swapi-search/components/swapi-search-form/swapi-search-form.component';
import { SwapiSearchCardComponent } from './swapi-search/components/swapi-search-card/swapi-search-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { SortType } from './swapi-search/enums/sort-type.enum';
import { SortDirection } from './swapi-search/enums/sort-direction.enum';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('AppComponent', () => {
  let store: MockStore<any>;
  const initialState = {
      totalCount: 0,
      nextPage: '',
      previousPage: '',
      characterData: [],
      errorMsg: null,
      isLoading: false,
      sortType: SortType.DEFAULT,
      sortDirection: SortDirection.ONWARDS
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SwapiSearchComponent,
        SwapiSearchResultComponent,
        SwapiSearchFormComponent,
        SwapiSearchCardComponent
      ],
      imports: [
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        MatCardModule,
        MatProgressSpinnerModule
      ],
      providers: [
        MockStore,
        provideMockStore({ initialState }),
      ]
    }).compileComponents();

    store = TestBed.get(MockStore);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
