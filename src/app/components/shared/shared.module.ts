import { NgModule } from "@angular/core";
import { CardModule } from "./card/card.module";

const modules = [CardModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule {}
