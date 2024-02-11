import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersSearchComponent } from './characters-search.component';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";

describe('CharactersSearchComponent', () => {
  let component: CharactersSearchComponent;
  let fixture: ComponentFixture<CharactersSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersSearchComponent ],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        BrowserAnimationsModule
      ],
      providers: [FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with an empty search field',  () => {
    expect(component.form.get('search').value).toEqual('');
  });
  it('should emit trimmed search term when onSearch is called',  () => {
    const searchTerm = '  Yoda   ';
    spyOn(component.search, 'emit');
    component.form.patchValue({search: searchTerm});
    component.onSearch();
    expect(component.search.emit).toHaveBeenCalledWith(searchTerm.trim());
  });
});
