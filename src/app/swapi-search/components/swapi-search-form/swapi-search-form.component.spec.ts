import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiSearchFormComponent } from './swapi-search-form.component';

describe('SwapiSearchFormComponent', () => {
  let component: SwapiSearchFormComponent;
  let fixture: ComponentFixture<SwapiSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapiSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
