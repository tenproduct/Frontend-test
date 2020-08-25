import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiSearchFormComponent } from './swapi-search-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SwapiSearchFormComponent', () => {
  let component: SwapiSearchFormComponent;
  let fixture: ComponentFixture<SwapiSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SwapiSearchFormComponent
      ],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create swapi form component', () => {
    expect(component).toBeTruthy();
  });
});
