import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { MatCardModule } from "@angular/material/card"; 
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [PokemonDetailComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ]
})
export class PokemonModule { }
