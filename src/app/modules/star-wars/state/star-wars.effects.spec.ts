import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StarWarsEffects } from './star-wars.effects';

describe('StarWarsEffects', () => {
  let actions$: Observable<any>;
  let effects: StarWarsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StarWarsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(StarWarsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
