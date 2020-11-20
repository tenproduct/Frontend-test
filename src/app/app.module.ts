import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CharacterSearchComponent } from './components/character-search/character-search.component';
import { NetworkService } from './services/network.service';
import { StarWarsService } from './services/star-wars.service';

@NgModule({
  declarations: [
    AppComponent,
    CharacterSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
  ],
  providers: [NetworkService, StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
