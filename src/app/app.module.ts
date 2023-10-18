import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './views/pokemons/pokemon-list/pokemon-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card"; 
import { MatButtonModule } from "@angular/material/button";
import { PokemonModule } from './views/pokemons/pokemon.module';
import { FilterPipe } from './shared/utils/filter.pipe';
import { FormsModule } from '@angular/forms';
  

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,  
    MatButtonModule,
    PokemonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
