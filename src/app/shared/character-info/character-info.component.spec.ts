import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CharacterInfoComponent } from './character-info.component';

describe('CharacterInfoComponent', () => {
    let component: CharacterInfoComponent;
    let fixture: ComponentFixture<CharacterInfoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [CharacterInfoComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: { character: {}, odd: false } }
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CharacterInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
