import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { StarWarsRoutingModule } from './star-wars-routing.module';
import { StarWarsComponent } from './components/star-wars/star-wars.component';
import * as fromStarWars from './state/star-wars.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StarWarsEffects } from './state/star-wars.effects';

@NgModule({
  imports: [
    CommonModule,
    StarWarsRoutingModule,
    StoreModule.forFeature(
      fromStarWars.starWarsFeatureKey,
      fromStarWars.reducer
    ),
    EffectsModule.forFeature([StarWarsEffects])
  ],
  declarations: [StarWarsComponent]
})
export class StarWarsModule { }
