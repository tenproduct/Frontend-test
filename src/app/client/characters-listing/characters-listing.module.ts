import { NgModule } from '@angular/core';
import { CharactersListingComponent } from './characters-listing.component';
import { CommonModule } from '@angular/common';
import { CharactersListModule } from '../characters-list/characters-list.module';
import { CharactersSearchModule } from '../characters-search/characters-search.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { CharactersSortModule } from '../characters-sort/characters-sort.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EffectsModule } from '@ngrx/effects';
import { CharactersEffects } from '../../state/characters/characters.effects';

@NgModule({
  declarations: [CharactersListingComponent],
  exports: [CharactersListingComponent],
  imports: [
    CommonModule,
    CharactersListModule,
    CharactersSearchModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    CharactersSortModule,
    MatToolbarModule,
    EffectsModule.forFeature([CharactersEffects]),
  ],
})
export class CharactersListingModule {}
