import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiSearchComponent } from './swapi-search.component';
import { SwapiSearchResultComponent } from './components/swapi-search-result/swapi-search-result.component';
import { SwapiSearchFormComponent } from './components/swapi-search-form/swapi-search-form.component';
import { SwapiSearchCardComponent } from './components/swapi-search-card/swapi-search-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SortType } from './enums/sort-type.enum';
import { SortDirection } from './enums/sort-direction.enum';

describe('SwapiSearchComponent', () => {
  let component: SwapiSearchComponent;
  let fixture: ComponentFixture<SwapiSearchComponent>;
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
        MatCardModule
      ],
      providers: [
        MockStore,
        provideMockStore({ initialState }),
      ]
    })
      .compileComponents();
    store = TestBed.get(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create main search component', () => {
  //  expect(component).toBeTruthy();
  // });

  // Skipped this test due to version problems, the mockStore won't update before the tests are ran
  // so even mockSelectors are not working as expected
  // https://github.com/ngrx/platform/issues/1778
  // Sort of got fixed on ngrx9
});
