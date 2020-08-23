import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiSearchResultComponent } from './swapi-search-result.component';

describe('SwapiSearchResultComponent', () => {
  let component: SwapiSearchResultComponent;
  let fixture: ComponentFixture<SwapiSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapiSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
