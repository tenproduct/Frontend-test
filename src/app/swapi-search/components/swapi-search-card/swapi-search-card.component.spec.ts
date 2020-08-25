import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SwapiSearchCardComponent } from './swapi-search-card.component';
import { MatCardModule } from '@angular/material/card';
import { Character } from '../../models/swapi-ppl-character.model';
import { characterMock } from '../../mocks/character.test.mock';

describe('SwapiSearchCardComponent', () => {
  let component: SwapiSearchCardComponent;
  let fixture: ComponentFixture<SwapiSearchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SwapiSearchCardComponent
       ],
       imports: [
         MatCardModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiSearchCardComponent);
    component = fixture.componentInstance;
    component.character = new Character(characterMock);
    component.isOdd = false;
    fixture.detectChanges();
  });

  it('should create the card component', () => {
    expect(component).toBeTruthy();
  });
});
