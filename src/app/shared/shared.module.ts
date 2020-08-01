import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { CharacterCardComponent } from './character-card/character-card.component';
import { TrackByPropertyPipe } from './pipes';
import { ToolbarComponent } from './toolbar/toolbar.component';

const sharedComponents = [
    ToolbarComponent,
    CharacterCardComponent
];

const sharedPipes = [
    TrackByPropertyPipe
];

@NgModule({
    declarations: [
        ...sharedComponents,
        ...sharedPipes
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        MatToolbarModule,
        MatCardModule
    ],
    exports: [
        ...sharedComponents,
        ...sharedPipes
    ]
})
export class SharedModule { }
