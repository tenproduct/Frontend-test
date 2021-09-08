import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { reducer, rootStateKey } from './state/app.state';
import { AppEffects } from './state/app.effects';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        HttpClientModule,
        StoreModule.forRoot({ [rootStateKey]: reducer }),
        EffectsModule.forRoot([AppEffects]),
        StoreDevtoolsModule.instrument({
            logOnly: environment.production
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
