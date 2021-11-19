import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { CharactersEffects } from "./characters.effects";
import { CharactersFacade } from "./characters.facade";
import { CharacterReducer, CHARACTERS_FEATURE_KEY } from "./characters.reducer";

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    StoreModule.forFeature(CHARACTERS_FEATURE_KEY, CharacterReducer),
    EffectsModule.forRoot([CharactersEffects]),
    HttpClientModule,
  ],
  providers: [CharactersFacade],
})
export class CharactersStoreModule {}
