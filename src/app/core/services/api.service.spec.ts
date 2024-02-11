import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import {SWCharacter} from "../models/character-response.model";
import {mockCharacters} from "../../test/characters.mock";

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make GET request', () => {
    const mockData: SWCharacter[] = mockCharacters;
    const url = 'testUrl';
    const expectedUrl = environment.swapiDevUrl + url;

    service.get<SWCharacter[]>(url).subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);
  });
});
