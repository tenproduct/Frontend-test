import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { StarWarsRoutingModule } from './star-wars-routing.module';
import { StarWarsComponent } from './components/star-wars/star-wars.component';
import * as fromStarWars from './state/star-wars.reducer';
import { StarWarsEffects } from './state/star-wars.effects';
import { StarWarsService } from './services/star-wars.service';
import { CharacterCardComponent } from './components/character-card/character-card.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StarWarsRoutingModule,
    StoreModule.forFeature(
      fromStarWars.starWarsFeatureKey,
      fromStarWars.reducer
    ),
    EffectsModule.forFeature([StarWarsEffects]),
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [
    StarWarsService
  ],
  declarations: [
    StarWarsComponent,
    CharacterCardComponent
  ]
})
export class StarWarsModule {
}
