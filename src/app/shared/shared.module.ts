import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule  } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { TrackByPropertyPipe } from './pipes';
import { ToolbarComponent } from './toolbar/toolbar.component';

const sharedComponents = [
    LoadingIndicatorComponent,
    CharacterCardComponent,
    CharacterInfoComponent,
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
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatToolbarModule,
        MatDialogModule,
        MatCardModule,
        MatTabsModule
    ],
    exports: [
        ...sharedComponents,
        ...sharedPipes
    ]
})
export class SharedModule { }
