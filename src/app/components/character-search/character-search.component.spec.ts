import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { StarWarsService } from 'src/app/services/star-wars.service';
import { CharacterSearchComponent } from './character-search.component';


describe('CharacterSearchComponent', () => {
  let component: CharacterSearchComponent;
  let fixture: ComponentFixture<CharacterSearchComponent>;
  const starWarsServiceSpy: jasmine.SpyObj<StarWarsService> = jasmine.createSpyObj('StarWarsServiceSpy', ['init']);
  starWarsServiceSpy.peopleList = of([]);

  beforeEach(async(() => {
    // spyOnProperty(starWarsServiceSpy, 'peopleList', 'get').and.returnValue(of([]));
    TestBed.configureTestingModule({
      declarations: [CharacterSearchComponent],
      providers: [
        {
          provide: StarWarsService, useValue: starWarsServiceSpy
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
