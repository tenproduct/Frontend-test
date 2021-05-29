import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwCharacterListComponent } from './sw-character-list.component';

describe('SwCharacterListComponent', () => {
  let component: SwCharacterListComponent;
  let fixture: ComponentFixture<SwCharacterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwCharacterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwCharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
