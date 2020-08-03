import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { provideMockStore } from '@ngrx/store/testing';

import { TrackByPropertyPipe } from '@shared/pipes';
import { initialSharedState } from '@shared/store';
import { CharacterSearchComponent } from './character-search.component';

describe('CharacterSearchComponent', () => {
    let component: CharacterSearchComponent;
    let fixture: ComponentFixture<CharacterSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatDialogModule],
            declarations: [CharacterSearchComponent, TrackByPropertyPipe],
            providers: [provideMockStore({ initialState: { shared: initialSharedState } })]
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
