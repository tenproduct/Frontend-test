import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store, StoreModule } from '@ngrx/store';
import { CharacterEffects } from './effects';
import { AppState } from '../../../core/models/app.model';
import { SharedModule } from '../../shared/shared.module';
import { characterReducer } from './reducers';
import { Features } from '../../../core/models/feature.enum';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { CharacterService } from '../services/character.service';

describe('CharacterEffects', () => {
  let store: Store<AppState>;
  let effects: CharacterEffects;
  let characterService: CharacterService;
  
  const createEffects = (actions$) => {
    TestBed.configureTestingModule({
      providers: [
        CharacterEffects,
        provideMockActions(() => actions$),
        {
          provide: CharacterService,
        }
      ],
      imports: [
        HttpClientModule,
        SharedModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(Features.Character, { characterReducer }),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([CharacterEffects]),
      ]
    });
    store = TestBed.get(Store);
    effects = TestBed.get(CharacterEffects);
    characterService = TestBed.get(CharacterService);
  };
});