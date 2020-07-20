import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOption, MatOptionModule } from '@angular/material/core';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CharacterSortComponent } from './character-sort.component';
import { SortOption } from '../../enums/sort-option';
import { StarWarsReducer, StarWarsSelectors, StarWarsStateActions } from '../../state';

describe('CharacterSortComponent', () => {
  let component: CharacterSortComponent;
  let fixture: ComponentFixture<CharacterSortComponent>;
  let mockStore: MockStore;
  let mockSortOptionSelector: MemoizedSelector<StarWarsReducer.State, SortOption>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule
      ],
      providers: [provideMockStore()],
      declarations: [CharacterSortComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSortComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    mockSortOptionSelector = mockStore.overrideSelector(
      StarWarsSelectors.selectSortOption,
      SortOption.A_Z
    );

    fixture.detectChanges();

    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have selected value', () => {
    const matSelect: MatSelect = fixture.debugElement.query(By.directive(MatSelect)).componentInstance;

    expect(matSelect.value).toBe(SortOption.A_Z);
  });

  it('should change selected value', () => {
    mockSortOptionSelector.setResult(SortOption.Z_A);
    mockStore.refreshState();
    fixture.detectChanges();

    const matSelect: MatSelect = fixture.debugElement.query(By.directive(MatSelect)).componentInstance;

    expect(matSelect.value).toBe(SortOption.Z_A);
  });

  it('should have options in order', () => {
    const expectedOrder: string[] = [
      'A - Z',
      'Z - A',
      'Male',
      'Female'
    ];

    const matSelectDebug: DebugElement = fixture.debugElement.query(By.directive(MatSelect));

    matSelectDebug.nativeElement.click();
    fixture.detectChanges();

    const options: DebugElement[] = fixture.debugElement.queryAll(By.directive(MatOption));

    const values: string[] = options.map((o: DebugElement) => (o.componentInstance as MatOption).viewValue);

    expect(values.length).toBe(expectedOrder.length);
    expect(values).toEqual(expectedOrder);
  });

  it('should dispatch ChangeSortOption action', () => {
    const dispatchSpy = spyOn(mockStore, 'dispatch');
    const matSelectDebug: DebugElement = fixture.debugElement.query(By.directive(MatSelect));
    matSelectDebug.nativeElement.click();
    fixture.detectChanges();

    const options: DebugElement[] = fixture.debugElement.queryAll(By.directive(MatOption));

    // Select last option
    options[3].nativeElement.click();
    fixture.detectChanges();

    expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
    expect(mockStore.dispatch).toHaveBeenCalledWith(new StarWarsStateActions.ChangeSortOption(SortOption.Female));
  });
});
