import { MatCardModule } from '@angular/material/card';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwCardComponent } from './sw-card.component';

describe('SwCardComponent', () => {
    let component: SwCardComponent;
    let fixture: ComponentFixture<SwCardComponent>;

    const getImageSrc = (): string => fixture.nativeElement.getElementsByTagName('img')[0].src;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatCardModule],
            declarations: [SwCardComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SwCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have the mock-image.png by default', () => {
        expect(getImageSrc().endsWith('/mock-image.png')).toBeTruthy();
    });

    it('should have the mock-image-1.png image if odd', () => {
        component.isOdd = true;
        fixture.detectChanges();

        expect(getImageSrc().endsWith('/mock-image-1.png')).toBeTruthy();
    });
});
