import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwCardComponent } from './sw-card.component';

describe('SwCardComponent', () => {
  let component: SwCardComponent;
  let fixture: ComponentFixture<SwCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
