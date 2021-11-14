import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SharedModule } from '../../shared/shared.module';

import { CharacterService } from './character.service';

describe('CharacterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  }));

  it('should be created', () => {
    const service: CharacterService = TestBed.get(CharacterService);
    expect(service).toBeTruthy();
  });
});
