import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwDashboardComponent } from './sw-dashboard.component';

describe('SwDashboardComponent', () => {
  let component: SwDashboardComponent;
  let fixture: ComponentFixture<SwDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
