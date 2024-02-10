import {NgModule} from '@angular/core';
import {CharactersListingComponent} from './characters-listing.component';
import {CommonModule} from '@angular/common';
import {CharactersListModule} from '../characters-list/characters-list.module';

@NgModule({
  declarations: [CharactersListingComponent],
  exports: [
    CharactersListingComponent,
  ],
  imports: [
    CommonModule,
    CharactersListModule
  ]
})

export class CharactersListingModule {
}
