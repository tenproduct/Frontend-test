import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersSortComponent } from './characters-sort.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortTypeEnum } from '../../core/enums/sort-type-enum';

describe('CharactersSortComponent', () => {
  let component: CharactersSortComponent;
  let fixture: ComponentFixture<CharactersSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharactersSortComponent],
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit sort method when onChange method is called', () => {
    const sortMethod: keyof typeof SortTypeEnum = 'ASCENDING';
    spyOn(component.changeSort, 'emit');
    component.onChange({ value: sortMethod, source: null });
    expect(component.changeSort.emit).toHaveBeenCalledWith(sortMethod);
  });
});
