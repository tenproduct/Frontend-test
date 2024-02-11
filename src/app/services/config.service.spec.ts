import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IConfigUrl } from '../models/config.model';

describe('ConfigService', () => {
  let service: ConfigService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConfigService]
    });
    service = TestBed.get(ConfigService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch config data from the server', () => {
    const mockConfig: IConfigUrl = { swapiUrl: 'https://example.com/api' };
    service.getConfig().subscribe(config => {
      expect(config).toEqual(mockConfig);
    });

    const req = httpMock.expectOne('assets/config.json');
    expect(req.request.method).toBe('GET');

    req.flush(mockConfig);
  });

  it('should handle errors when fetching config data', () => {
    const errorMessage = '404 Not Found';
    service.getConfig().subscribe(
      () => fail('should have failed with the 404 error'),
      error => {
        expect(error.status).toBe(404);
        expect(error.error).toBe(errorMessage);
      }
    );

    const req = httpMock.expectOne('assets/config.json');
    req.flush(errorMessage, { status: 404, statusText: 'Not Found' });
  });
});
