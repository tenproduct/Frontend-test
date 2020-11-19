import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { characterStub } from '../models/character';
import { NetworkService } from './network.service';
import { StarWarsService } from './star-wars.service';

const MockNetworkService = {
  get: () => {
    return of({
      count: 1,
      next: null,
      previous: null,
      results: [
        characterStub
      ]
    });
  }
};

describe('StarWarsService', () => {
  let service: StarWarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: NetworkService, useValue: MockNetworkService }
      ]
    });
    service = TestBed.inject(StarWarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('init() should call into people API', (done) => {
    service.peopleList.subscribe(
      (list) => {
        expect(list).toEqual([characterStub]);
        done();
      },
      () => { // fail on error
        fail();
      }
    );
    service.init();
  });

});
