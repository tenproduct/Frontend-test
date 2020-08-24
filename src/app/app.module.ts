import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { SwapiSearchComponent } from './swapi-search/swapi-search.component';
import { SwapiSearchCardComponent } from './swapi-search/components/swapi-search-card/swapi-search-card.component';
import { SwapiSearchFormComponent } from './swapi-search/components/swapi-search-form/swapi-search-form.component';
import { SwapiSearchResultComponent } from './swapi-search/components/swapi-search-result/swapi-search-result.component';
import { StoreModule } from '@ngrx/store';
import { SwapiService } from './swapi-search/services/swapi.service';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import * as fromCharacters from './swapi-search/store/characters.reducer';
import { CharacterEffects } from './swapi-search/store/characters.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    SwapiSearchComponent,
    SwapiSearchFormComponent,
    SwapiSearchResultComponent,
    SwapiSearchCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({characters: fromCharacters.characterReducer}),
    EffectsModule.forRoot([CharacterEffects]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
