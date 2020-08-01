import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { TrackByPropertyPipe } from './pipes';
import { ToolbarComponent } from './toolbar/toolbar.component';

const sharedComponents = [
    LoadingIndicatorComponent,
    CharacterCardComponent,
    ToolbarComponent
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
        MatProgressBarModule,
        MatToolbarModule,
        MatCardModule
    ],
    exports: [
        ...sharedComponents,
        ...sharedPipes
    ]
})
export class SharedModule { }
