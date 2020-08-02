import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-sort-warning-dialog',
    templateUrl: './sort-warning-dialog.component.html',
    styleUrls: ['./sort-warning-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortWarningDialogComponent {
    constructor() { }
}
