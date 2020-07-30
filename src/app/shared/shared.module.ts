import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { environment } from '@environment';
import { SHARED_REDUCERS_TOKEN, SharedEffects, sharedReducers } from './store';
import { ToolbarComponent } from './toolbar/toolbar.component';

const sharedComponents = [
    ToolbarComponent
];

@NgModule({
    declarations: [
        ...sharedComponents
    ],
    imports: [
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        StoreModule.forRoot(SHARED_REDUCERS_TOKEN, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
                strictStateSerializability: true,
                strictActionSerializability: true,
                strictActionWithinNgZone: true,
                strictActionTypeUniqueness: true
            }
        }),
        EffectsModule.forRoot([SharedEffects]),
        StoreRouterConnectingModule.forRoot(),
        HttpClientModule,
        CommonModule,
        MatToolbarModule
    ],
    exports: [
        ...sharedComponents
    ],
    providers: [
        { provide: SHARED_REDUCERS_TOKEN, useValue: sharedReducers }
    ]
})
export class SharedModule { }
