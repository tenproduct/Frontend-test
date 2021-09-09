import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { reducer, rootStateKey } from './state/app.state';
import { AppEffects } from './state/app.effects';
import { environment } from '../environments/environment';
import { SearchComponent } from './components/search/search.component';
import { SortComponent } from './components/sort/sort.component';
import { SwCardComponent } from './components/sw-card/sw-card.component';

@NgModule({
    declarations: [AppComponent, SearchComponent, SortComponent, SwCardComponent],
    imports: [
        BrowserModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        StoreModule.forRoot({ [rootStateKey]: reducer }),
        EffectsModule.forRoot([AppEffects]),
        StoreDevtoolsModule.instrument({
            logOnly: environment.production
        }),
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
