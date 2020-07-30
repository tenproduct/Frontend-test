import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { CharacterCardComponent } from './character-card/character-card.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const sharedComponents = [
    ToolbarComponent,
    CharacterCardComponent
];

@NgModule({
    declarations: [
        ...sharedComponents
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        MatToolbarModule,
        MatCardModule
    ],
    exports: [
        ...sharedComponents
    ]
})
export class SharedModule { }
