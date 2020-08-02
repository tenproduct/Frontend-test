import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { provideMockStore } from '@ngrx/store/testing';

import { initialSharedState } from '@shared/store';
import { CharacterSortFieldComponent } from './character-sort-field.component';

describe('CharacterSortFieldComponent', () => {
    let component: CharacterSortFieldComponent;
    let fixture: ComponentFixture<CharacterSortFieldComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatDialogModule],
            declarations: [CharacterSortFieldComponent],
            providers: [provideMockStore({ initialState: { shared: initialSharedState } })]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CharacterSortFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
