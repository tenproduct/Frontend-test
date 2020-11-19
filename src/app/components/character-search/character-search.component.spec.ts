import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { characterStub } from 'src/app/models/character';

import { StarWarsService } from 'src/app/services/star-wars.service';
import { CharacterSearchComponent } from './character-search.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mat-card',
  template: '',
})
class MatCardStubComponent {
}

describe('CharacterSearchComponent', () => {
  let component: CharacterSearchComponent;
  let fixture: ComponentFixture<CharacterSearchComponent>;
  const starWarsServiceSpy = {
    ...jasmine.createSpyObj('StarWarsServiceSpy', ['init']),
    peopleList: of(),
    totalCharacters: 0
  } as jasmine.SpyObj<StarWarsService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CharacterSearchComponent,
        MatCardStubComponent,
      ],
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
  });

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display the visible amount shown and the max result count', () => {
    // GIVEN
    starWarsServiceSpy.totalCharacters = 5;
    starWarsServiceSpy.peopleList = of([
      characterStub,
      { ...characterStub, name: 'C-3PO' }
    ]);
    // ERROR: Property peopleList does not have access type get
    // spyOnProperty(starWarsServiceSpy, 'peopleList', 'get').and.returnValue(of([
    //   characterStub,
    //   { ...characterStub, name: 'C-3PO' }
    // ]));

    // WHEN
    fixture.detectChanges();
    const statusMessage = fixture.debugElement.query(By.css('.resultscount'));

    // THEN
    expect(statusMessage).toBeTruthy();
    expect(statusMessage.nativeElement.textContent).toEqual('Showing 2 results of 5');
  });
});
