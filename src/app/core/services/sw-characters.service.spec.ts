import { TestBed } from '@angular/core/testing';

import { SwCharactersService } from './sw-characters.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { mockCharacters } from '../../test/characters.mock';
import { environment } from '../../../environments/environment.prod';
import {
  SWCharacter,
  SWCharacterResponse,
} from '../models/character-response.model';

describe('SwCharactersService', () => {
  let service: SwCharactersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SwCharactersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should return Characters list', () => {
    const charactersResponse: SWCharacterResponse = {
      next: '',
      count: 50,
      previous: null,
      results: mockCharacters,
    };
    const page = 2;
    const search = '';
    service.getCharacters(page, search).subscribe((res) => {
      expect(res).toEqual(charactersResponse);
    });
    const req = httpMock.expectOne(
      `people/?format=json&page=${page}&search=${search}`,
    );
    expect(req.request.method).toBe('GET');
    req.flush(charactersResponse);
  });
});
