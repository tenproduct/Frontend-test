import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersSortComponent } from './characters-sort.component';

describe('CharactersSortComponent', () => {
  let component: CharactersSortComponent;
  let fixture: ComponentFixture<CharactersSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
