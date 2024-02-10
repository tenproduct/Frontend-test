import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharactersListComponent} from './characters-list.component';
import {CharacterCardModule} from "../character-card/character-card.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [CharactersListComponent],
  exports: [
    CharactersListComponent
  ],
    imports: [
        CommonModule,
        CharacterCardModule,
        MatProgressSpinnerModule
    ]
})
export class CharactersListModule { }
