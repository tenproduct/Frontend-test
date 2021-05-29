import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwButtonComponent } from './sw-button.component';

describe('SwButtonComponent', () => {
  let component: SwButtonComponent;
  let fixture: ComponentFixture<SwButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
