import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './componets/character-list/character-list.component';
import { CharacterRoutingModule } from './character-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { Features } from '../core/models/feature.enum';
import { characterReducer } from './state/reducers';
import { EffectsModule } from '@ngrx/effects';
import { CharacterEffects } from './state/effects';
import { CharacterSortPipe } from './pipes/character-sort.pipe';
import { CharacterSearchComponent } from './componets/character-search/character-search.component';
import { CharacterSortComponent } from './componets/character-sort/character-sort.component';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterSortPipe,
    CharacterSearchComponent,
    CharacterSortComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule,
    StoreModule.forFeature(Features.Character, characterReducer),
    EffectsModule.forFeature([CharacterEffects]),
  ]
})
export class CharacterModule { }
