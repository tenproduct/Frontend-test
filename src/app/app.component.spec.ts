import {TestBed, async, ComponentFixture, fakeAsync, tick} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectChange, MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeopleCardComponent } from './components/people-card/people-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Store } from '@ngrx/store';
import { State } from './store/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as actions from './store/actions/people.actions';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let storeMock: jasmine.SpyObj<Store<State>>;

  beforeEach(async(() => {
    storeMock = jasmine.createSpyObj('Store', ['select', 'dispatch']);

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PeopleCardComponent
      ],
      imports: [
        MatToolbarModule, MatCardModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatInputModule, MatAutocompleteModule,
        MatFormFieldModule, MatSelectModule,
        FormsModule, ReactiveFormsModule, BrowserAnimationsModule
      ],
      providers: [{ provide: Store, useValue: storeMock }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadData action on ngOnInit', () => {
    expect(storeMock.dispatch).toHaveBeenCalledWith(actions.loadData());
  });

  it('should dispatch loadMoreData action when loadMorePeople is called', () => {
    component.loadMorePeople();
    expect(storeMock.dispatch).toHaveBeenCalledWith(actions.loadMoreData());
  });

  it('should dispatch sortPeople action when sortByValue is called', () => {
    const event: MatSelectChange = { value: 'male' } as MatSelectChange;
    component.sortByValue(event);
    expect(storeMock.dispatch).toHaveBeenCalledWith(actions.sortPeople({ sortBy: 'male' }));
  });

  it('should dispatch searchPeople action when searchPeople is called', () => {
    component.searchControl.setValue('Luke');
    component.searchPeople();
    expect(storeMock.dispatch).toHaveBeenCalledWith(actions.searchPeople({ searchStr: 'Luke' }));
  });
});
