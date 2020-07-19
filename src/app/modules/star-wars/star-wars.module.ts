import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { StarWarsRoutingModule } from './star-wars-routing.module';
import * as fromStarWars from './state/star-wars.reducer';
import { StarWarsEffects } from './state/star-wars.effects';

import { StarWarsService } from './services/star-wars.service';

import { StarWarsComponent } from './components/star-wars/star-wars.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterSortComponent } from './components/character-sort/character-sort.component';
import { CharacterSearchComponent } from './components/character-serach/character-serach.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    StarWarsService
  ],
  declarations: [
    StarWarsComponent,
    CharacterCardComponent,
    CharacterSortComponent,
    CharacterSearchComponent
  ]
})
export class StarWarsModule {
}
