import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './componets/character-list/character-list.component';
import { CharacterRoutingModule } from './character-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CharacterSearchComponent } from './componets/character-search/character-search.component';
import { CharacterSortComponent } from './componets/character-sort/character-sort.component';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterSearchComponent,
    CharacterSortComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule,
  ]
})
export class CharacterModule { }
