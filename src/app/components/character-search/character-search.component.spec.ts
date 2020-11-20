import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { Character, characterStub } from 'src/app/models/character';

import { StarWarsService } from 'src/app/services/star-wars.service';
import { CharacterSearchComponent } from './character-search.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mat-card',
  template: '',
})
class MatCardStubComponent {
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mat-card-content',
  template: '',
})
class MatCardContentStubComponent {
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mat-form-field',
  template: '',
})
class MatFormFieldStubComponent {
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mat-label',
  template: '',
})
class MatLabelStubComponent {
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mat-select',
  template: '',
})
class MatSelectStubComponent {
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mat-option',
  template: '',
})
class MatOptionStubComponent {
  @Input()
  value: any;
}

describe('CharacterSearchComponent', () => {
  let component: CharacterSearchComponent;
  let fixture: ComponentFixture<CharacterSearchComponent>;
  const helperSubject = new BehaviorSubject<Character[]>([]);
  const starWarsServiceSpy = {
    ...jasmine.createSpyObj('StarWarsServiceSpy', ['init']),
    peopleList: helperSubject.asObservable(),
    totalCharacters: 0
  } as jasmine.SpyObj<StarWarsService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CharacterSearchComponent,
        MatCardStubComponent,
        MatCardContentStubComponent,
        MatFormFieldStubComponent,
        MatLabelStubComponent,
        MatOptionStubComponent,
        MatSelectStubComponent,
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
    helperSubject.next([
      characterStub,
      { ...characterStub, name: 'C-3PO' }
    ]);

    // WHEN
    fixture.detectChanges();

    // THEN
    // ngOnInit() and template rendering is actually synchronous so '| async' is subscribing to synchronous observables
    const statusMessage = fixture.debugElement.query(By.css('.resultscount'));
    expect(statusMessage).toBeTruthy();
    expect(statusMessage.nativeElement.textContent).toEqual('Showing 2 results of 5');
  });
});
