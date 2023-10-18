import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPokemon } from 'src/app/shared/models/pokemon.interface';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {

  public selectedPokemon: any;

  constructor(private pokemonService: PokemonService, private router: Router,) {
  }

  ngOnInit(): void {
    this.pokemonService.selectedPokemon.subscribe(value => {
      this.selectedPokemon = value;
    })
  }

  public comeBack() {
    this.router.navigate(["/"])
  }
}
