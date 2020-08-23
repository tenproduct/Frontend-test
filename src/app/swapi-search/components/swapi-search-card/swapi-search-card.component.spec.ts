import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiSearchCardComponent } from './swapi-search-card.component';

describe('SwapiSearchCardComponent', () => {
  let component: SwapiSearchCardComponent;
  let fixture: ComponentFixture<SwapiSearchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapiSearchCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
