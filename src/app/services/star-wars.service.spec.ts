import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { characterStub } from '../models/character';
import { NetworkService } from './network.service';
import { StarWarsService } from './star-wars.service';

describe('StarWarsService', () => {
  let service: StarWarsService;
  const MockNetworkService: jasmine.SpyObj<NetworkService> = jasmine.createSpyObj<NetworkService>('MockNetworkService', ['get']);

  beforeEach(() => {
    MockNetworkService.get.calls.reset();
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

  it('init() should call into people API', () => {
    const network = TestBed.inject(NetworkService);
    MockNetworkService.get.and.returnValue(
      of({
        count: 1,
        next: null,
        previous: null,
        results: [
          characterStub
        ]
      })
    );

    expect(network.get).not.toHaveBeenCalled();
    service.init();
    expect(network.get).toHaveBeenCalled();
  });

  it('init() should load characters into store', () => {
    MockNetworkService.get.and.returnValue(
      of({
        count: 2,
        next: null,
        previous: null,
        results: [
          characterStub,
          {...characterStub, name: 'C-3PO'}
        ]
      })
    );

    service.init();
    // of is a sync observable
    service.peopleList$.subscribe(
      (results) => {
        expect(results).toEqual([
          characterStub,
          {...characterStub, name: 'C-3PO'}
        ]);
      }
    );
  });

  it('next() should add new characters into store', () => {
    MockNetworkService.get.and.returnValues(
      of({
        count: 2,
        next: 'SOMEURL', // implementation checks for this URL
        previous: null,
        results: [
          characterStub
        ]
      }),
      of({
        count: 2,
        next: null,
        previous: null,
        results: [
          {...characterStub, name: 'R2-D2'}
        ]
      })
    );

    service.init();
    service.next();
    // of is a sync observable
    service.peopleList$.subscribe(
      (results) => {
        expect(results).toEqual([
          characterStub,
          {...characterStub, name: 'R2-D2'}
        ]);
      }
    );
  });
});
