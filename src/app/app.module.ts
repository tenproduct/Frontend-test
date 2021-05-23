import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SwDashboardComponent } from './sw-dashboard/sw-dashboard.component';
import { UiComponentsModule } from './ui-components/ui-components.module';
import { HttpClientModule } from '@angular/common/http';
import { SwCharacterListComponent } from './sw-character-list/sw-character-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SwDashboardComponent,
    SwCharacterListComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    UiComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
