import { TestBed, async, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiService } from './services';
import { of, Subject } from 'rxjs';
import { PeopleResponse, Person } from './models';

describe('AppComponent', () => {
  let apiService: jasmine.SpyObj<ApiService>;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let mockPeople = <Person[]>[{ name: 'Joe', gender: 'male' }, { name: 'Anna', gender: 'female' }, { name: 'Bob', gender: 'male' }];

  beforeEach(async(() => {
    apiService = jasmine.createSpyObj<ApiService>('ApiService', { getPeople: of(<PeopleResponse>{ count: 42, results: mockPeople }) });

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{ provide: ApiService, useValue: apiService }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('init', () => {
    it('should set people and max people count', () => {
      expect(component.people).toEqual(mockPeople);
      expect(component.maxPeopleCount).toBe(42);
    });
  });


  describe('sort', () => {
    it('should sort people from A to Z', () => {
      component.onSortChange('asc');
      expect(component.people).toEqual([mockPeople[1], mockPeople[2], mockPeople[0]]);
    });

    it('should sort people from Z to A', () => {
      component.onSortChange('desc');
      expect(component.people).toEqual([mockPeople[0], mockPeople[2], mockPeople[1]]);
    });

    it('should sort people by starting with males', () => {
      component.onSortChange('male');
      expect(component.people).toEqual([mockPeople[2], mockPeople[0], mockPeople[1]]);
    });

    it('should sort people by starting with females', () => {
      component.onSortChange('female');
      expect(component.people).toEqual([mockPeople[1], mockPeople[0], mockPeople[2]]);
    });
  });

  describe('load', () => {
    it('should set loading state during request', () => {
      const response$  = new Subject<PeopleResponse>();
      apiService.getPeople.and.returnValue(response$);

      component.onLoadMore();
      expect(component.loading).toBe(true);

      response$.complete();
      expect(component.loading).toBe(false);
    });

    it('should concat new people', () => {
      const newPerson = <Person>{ name: 'Chloe', gender: 'female' };
      apiService.getPeople.and.returnValue(of(<PeopleResponse>{ count: 42, results: [newPerson] }));
      component.onLoadMore();
      
      expect(component.people).toEqual([mockPeople[0], mockPeople[1], mockPeople[2], newPerson]);
    });
  
    it('should sort new people as well', () => {
      const newPerson = <Person>{ name: 'Chloe', gender: 'female' };
      apiService.getPeople.and.returnValue(of(<PeopleResponse>{ count: 42, results: [newPerson] }));
      component.onSortChange('asc');
      component.onLoadMore();
      
      expect(component.people).toEqual([mockPeople[1], mockPeople[2], newPerson, mockPeople[0]]);
    });

    it('should send request with next page number', () => {
      component.onLoadMore();
      expect(apiService.getPeople.calls.mostRecent().args[0]).toBe(2);
      component.onLoadMore();
      expect(apiService.getPeople.calls.mostRecent().args[0]).toBe(3);
    });
  });

  describe('search', () => {
    it('should send request with the provided text', () => {
      const searchText = 'Yoda';
      component.onSearch(searchText);
      component.onLoadMore();
      expect(apiService.getPeople).toHaveBeenCalledWith(jasmine.anything(), searchText);
    });

    it('should send request without page', () => {
      component.onSearch('Anakin');
      expect(apiService.getPeople).toHaveBeenCalledWith(undefined, jasmine.anything());
    });
  });

});
