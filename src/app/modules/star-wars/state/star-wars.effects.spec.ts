import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { StarWarsEffects } from './star-wars.effects';
import { provideMockStore } from '@ngrx/store/testing';
import { StarWarsService } from '../services/star-wars.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('StarWarsEffects', () => {
  let actions$: Observable<any>;
  let effects: StarWarsEffects;
  let mockStarWarsService: jasmine.SpyObj<StarWarsService>;

  beforeEach(() => {

    mockStarWarsService = jasmine.createSpyObj(['loadCharacters']);
    mockStarWarsService.loadCharacters.and.returnValue(of({} as any));

    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule
      ],
      providers: [
        StarWarsEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
        {provide: StarWarsService, useValue: mockStarWarsService}
      ]
    });

    effects = TestBed.inject(StarWarsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
