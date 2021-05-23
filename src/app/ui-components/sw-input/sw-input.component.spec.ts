import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwInputComponent } from './sw-input.component';

describe('SwInputComponent', () => {
  let component: SwInputComponent;
  let fixture: ComponentFixture<SwInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
