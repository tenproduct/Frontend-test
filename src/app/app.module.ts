import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './state/app.effects';
import {rootStateKey} from './state/app.state';
import {appReducer} from './state/app.reducer';
import {ListingModule} from "./client/listing/listing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({[rootStateKey]: appReducer}),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    ListingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
