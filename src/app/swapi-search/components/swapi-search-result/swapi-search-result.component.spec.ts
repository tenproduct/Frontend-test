import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiSearchResultComponent } from './swapi-search-result.component';
import { Character } from '../../models/swapi-ppl-character.model';
import { characterMock } from '../../mocks/character.test.mock';
import { SortDirection } from '../../enums/sort-direction.enum';
import { SortType } from '../../enums/sort-type.enum';
import { SwapiSearchFormComponent } from '../swapi-search-form/swapi-search-form.component';
import { MatIconModule } from '@angular/material/icon';
import { SwapiSearchCardComponent } from '../swapi-search-card/swapi-search-card.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('SwapiSearchResultComponent', () => {
  let component: SwapiSearchResultComponent;
  let fixture: ComponentFixture<SwapiSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SwapiSearchResultComponent,
        SwapiSearchFormComponent,
        SwapiSearchCardComponent
      ],
      imports: [
        MatIconModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiSearchResultComponent);
    component = fixture.componentInstance;
    component.characters = [
      new Character(characterMock)
    ];
    component.sortDirection = SortDirection.ONWARDS;
    component.sortType = SortType.DEFAULT;
    component.totalCount = 1;

    fixture.detectChanges();
  });

  it('should create result component', () => {
    expect(component).toBeTruthy();
  });
});
