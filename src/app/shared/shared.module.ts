import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ToolbarComponent } from './toolbar/toolbar.component';

const sharedComponents = [
    ToolbarComponent
];

@NgModule({
    declarations: [
        ...sharedComponents
    ],
    imports: [
        CommonModule,
        MatToolbarModule
    ],
    exports: [
        ...sharedComponents
    ]
})
export class SharedModule { }
