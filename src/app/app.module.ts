import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { DashboardModule } from "./pages/dashboard/dashboard.module";
import { CharactersStoreModule } from "./store/characters.store.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    DashboardModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),

    CharactersStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
