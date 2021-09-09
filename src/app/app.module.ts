import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { reducer, rootStateKey } from './state/app.state';
import { AppEffects } from './state/app.effects';
import { environment } from '../environments/environment';
import { SearchComponent } from './components/search/search.component';

@NgModule({
    declarations: [AppComponent, SearchComponent],
    imports: [
        BrowserModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        HttpClientModule,
        StoreModule.forRoot({ [rootStateKey]: reducer }),
        EffectsModule.forRoot([AppEffects]),
        StoreDevtoolsModule.instrument({
            logOnly: environment.production
        }),
        MatButtonModule,
        MatInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
