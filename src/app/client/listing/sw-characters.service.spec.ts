import { TestBed } from '@angular/core/testing';

import { SwCharactersService } from './sw-characters.service';

describe('SwCharactersService', () => {
  let service: SwCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
