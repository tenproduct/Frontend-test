import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { HttpClientModule } from '@angular/common/http';
import { PeopleCardComponent } from './components/people-card/people-card.component';
import { EffectsModule } from '@ngrx/effects';
import { PeopleEffects } from './store/effects/people.effects';
import { MaterialModule } from './core/material.module';
import { URL_CONFIG_TOKEN } from './injections_token';


@NgModule({
  declarations: [
    AppComponent,
    PeopleCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      },
    }),
    EffectsModule.forRoot([PeopleEffects]),
    MaterialModule
  ],
  providers: [
    {
      provide: URL_CONFIG_TOKEN,
      useValue: 'assets/config.json'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
