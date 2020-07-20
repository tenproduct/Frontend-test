import { TestBed } from '@angular/core/testing';

import { StarWarsService } from './star-wars.service';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { CharacterApiResponse } from '../interfaces/character-api-response';

describe('StarWarsService', () => {
  let service: StarWarsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StarWarsService]
    });
    service = TestBed.inject(StarWarsService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returned Observable should match the right data', () => {
    const mockResponse: CharacterApiResponse = {
      count: 2,
      next: null,
      previous: null,
      results: [
        {
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
          gender: 'male',
          homeworld: 'http://swapi.dev/api/planets/1/',
          films: [
            'http://swapi.dev/api/films/1/',
            'http://swapi.dev/api/films/2/',
            'http://swapi.dev/api/films/3/',
            'http://swapi.dev/api/films/6/'
          ],
          species: [],
          vehicles: [
            'http://swapi.dev/api/vehicles/14/',
            'http://swapi.dev/api/vehicles/30/'
          ],
          starships: [
            'http://swapi.dev/api/starships/12/',
            'http://swapi.dev/api/starships/22/'
          ],
          created: '2014-12-09T13:50:51.644000Z',
          edited: '2014-12-20T21:17:56.891000Z',
          url: 'http://swapi.dev/api/people/1/'
        },
        {
          name: 'R2-D2',
          height: '96',
          mass: '32',
          hair_color: 'n/a',
          skin_color: 'white, blue',
          eye_color: 'red',
          birth_year: '33BBY',
          gender: 'n/a',
          homeworld: 'http://swapi.dev/api/planets/8/',
          films: [
            'http://swapi.dev/api/films/1/',
            'http://swapi.dev/api/films/2/',
            'http://swapi.dev/api/films/3/',
            'http://swapi.dev/api/films/4/',
            'http://swapi.dev/api/films/5/',
            'http://swapi.dev/api/films/6/'
          ],
          species: [
            'http://swapi.dev/api/species/2/'
          ],
          vehicles: [],
          starships: [],
          created: '2014-12-10T15:11:50.376000Z',
          edited: '2014-12-20T21:17:50.311000Z',
          url: 'http://swapi.dev/api/people/3/'
        },
      ]
    };
    service.loadCharacters('', 1).subscribe((response: CharacterApiResponse) => {
      expect(response.count).toEqual(mockResponse.count);
      expect(response.results[0].name).toEqual('Luke Skywalker');
      expect(response.results[0].gender).toEqual('male');
    });

    const req: TestRequest = httpTestingController.expectOne('https://swapi.dev/api/people');

    req.flush(mockResponse);
  });

  it('should add search string only', () => {
    service.loadCharacters('R2-D2', 1).subscribe();

    const req: TestRequest = httpTestingController.expectOne('https://swapi.dev/api/people?search=R2-D2');
    httpTestingController.expectNone('https://swapi.dev/api/people?search=R2-D2?page=1');
    req.flush({});
  });

  it('should not add page 1 to the request', () => {
    service.loadCharacters('', 1).subscribe();

    const req: TestRequest = httpTestingController.expectOne('https://swapi.dev/api/people');
    req.flush({});

    httpTestingController.expectNone('https://swapi.dev/api/people?page=1');
  });

  it('should add page count to the request', () => {
    service.loadCharacters('R2-D2', 42).subscribe();

    const req: TestRequest = httpTestingController.expectOne('https://swapi.dev/api/people?search=R2-D2&page=42');

    req.flush({});
  });

});
