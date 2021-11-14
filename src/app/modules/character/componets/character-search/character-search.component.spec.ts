import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/modules/shared/shared.module';

import { CharacterSearchComponent } from './character-search.component';

describe('CharacterSearchComponent', () => {
  let component: CharacterSearchComponent;
  let fixture: ComponentFixture<CharacterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSearchComponent ],
      imports: [
        BrowserAnimationsModule,
        SharedModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
