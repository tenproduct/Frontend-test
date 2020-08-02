import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortWarningDialogComponent } from './sort-warning-dialog.component';

describe('SortWarningDialogComponent', () => {
    let component: SortWarningDialogComponent;
    let fixture: ComponentFixture<SortWarningDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SortWarningDialogComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SortWarningDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
