import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSearchComponent } from './character-serach.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('CharacterSearchComponent', () => {
  let component: CharacterSearchComponent;
  let fixture: ComponentFixture<CharacterSearchComponent>;
  let mockStore: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterSearchComponent],
      providers: [provideMockStore()],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSearchComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
