import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersListingComponent } from './characters-listing.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {AppState, initialState} from '../../state/app.state';
import {Store} from '@ngrx/store';
import {getCharacters, loadMoreCharacters, searchCharacters, sortChange} from '../../state/app.actions';
import {SortTypeEnum} from "../../core/enums/sort-type-enum";

describe('ListingComponent', () => {
  let component: CharactersListingComponent;
  let fixture: ComponentFixture<CharactersListingComponent>;
  const state: AppState = initialState;
  let storeMock: jasmine.SpyObj<Store>;

  beforeEach(async(() => {
    storeMock = jasmine.createSpyObj('Store', ['select', 'dispatch']);
    TestBed.configureTestingModule({
      declarations: [ CharactersListingComponent ],
      imports: [MatProgressSpinnerModule, MatButtonModule],
      providers: [
        { provide: Store, useValue: storeMock }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get dispatch getCharacters action on ngOnInit',  () => {
    component.ngOnInit();
    expect(storeMock.dispatch).toHaveBeenCalledWith(getCharacters());
  });
  it('should get dispatch getCharacters action on onLoadMore',  () => {
    component.onLoadMore();
    expect(storeMock.dispatch).toHaveBeenCalledWith(getCharacters());
  });
  it('should get dispatch getCharacters action on search',  () => {
    const searchTerm = 'Yoda';
    component.onSearch(searchTerm);
    expect(storeMock.dispatch).toHaveBeenCalledWith(searchCharacters({search: searchTerm}));
  });
  it('should get dispatch getCharacters action on sort',  () => {
    const sortMethod: keyof typeof SortTypeEnum = 'ASCENDING';
    component.onSort(sortMethod);
    expect(storeMock.dispatch).toHaveBeenCalledWith(sortChange({sortMethod}));
  });
});
