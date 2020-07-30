import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SHARED_REDUCERS_TOKEN, SharedEffects, sharedReducers } from '@shared/store';
import { SharedModule } from '@shared/shared.module';
import { environment } from '@environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
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
        BrowserAnimationsModule,
        AppRoutingModule,
        BrowserModule,
        SharedModule
    ],
    providers: [
        { provide: SHARED_REDUCERS_TOKEN, useValue: sharedReducers }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
