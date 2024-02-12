import { TestBed } from '@angular/core/testing';

import { SwapiService } from './swapi.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConfigService } from './config.service';
import { IResponse } from '../models/config.model';
import { IPeople } from '../store/state.models';
import { of } from 'rxjs';

describe('SwapiService', () => {
  let service: SwapiService;
  let httpMock: HttpTestingController;
  let configServiceSpy: jasmine.SpyObj<ConfigService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ConfigService', ['getConfig']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SwapiService,
        { provide: ConfigService, useValue: spy }
      ]
    });
    service = TestBed.get(SwapiService);
    httpMock = TestBed.get(HttpTestingController);
    configServiceSpy = TestBed.get(ConfigService) as jasmine.SpyObj<ConfigService>;
  });

  afterEach(() => {
    httpMock.verify(); // Verifies that no requests are outstanding after each test
  });

  it('should fetch data from the SWAPI', () => {
    const mockConfig = { swapiUrl: 'https://example.com/api' };
    const mockResponse: IResponse<IPeople> = { results: [], count: 0, next: null, previous: null };

    configServiceSpy.getConfig.and.returnValue(of(mockConfig));

    service.getData().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${mockConfig.swapiUrl}/people`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should search people by name', () => {
    const mockConfig = { swapiUrl: 'https://example.com/api' };
    const searchParam = 'Luke';
    const mockResponse: IResponse<IPeople> = { results: [], count: 0, next: null, previous: null };

    configServiceSpy.getConfig.and.returnValue(of(mockConfig));

    service.searchPeopleByName(searchParam).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${mockConfig.swapiUrl}/people?search=${searchParam}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
