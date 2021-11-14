import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/modules/shared/shared.module';

import { CharacterSortComponent } from './character-sort.component';

describe('CharacterSortComponent', () => {
  let component: CharacterSortComponent;
  let fixture: ComponentFixture<CharacterSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSortComponent ],
      imports: [
        BrowserAnimationsModule,
        SharedModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
