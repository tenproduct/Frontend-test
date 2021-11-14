import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { Features } from 'src/app/core/models/feature.enum';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { CharacterSortPipe } from '../../pipes/character-sort.pipe';
import { characterReducer } from '../../state/reducers';
import { CharacterSearchComponent } from '../character-search/character-search.component';
import { CharacterSortComponent } from '../character-sort/character-sort.component';
import { CharacterListComponent } from './character-list.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CharacterListComponent,
        CharacterSearchComponent,
        CharacterSortComponent,
        CharacterSortPipe,
      ],
      imports: [
        BrowserAnimationsModule,
        SharedModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(Features.Character, characterReducer),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
