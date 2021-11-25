import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { 
  MatToolbarModule, 
  MatCardModule, 
  MatButtonModule, 
  MatInputModule, 
  MatIconModule, 
  MatSelectModule, 
  MatProgressSpinnerModule
} from '@angular/material';

import { PersonComponent } from './components/person/person.component';
import { SearchComponent } from './components/search/search.component';
import { SortComponent } from './components/sort/sort.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    SearchComponent,
    SortComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
