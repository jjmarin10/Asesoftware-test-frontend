import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPokemon } from 'src/app/shared/models/pokemon.interface';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  public pokemonsUrl: string[] = [];
  public pokemonsDetail: IPokemon[] = [];
  public searchText = '';

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.pokemonService.getAll().subscribe(
      // refactoring with rxjs(concatMap operator)
      resp => {
        this.pokemonsUrl = this.getPokemonUrls(resp.results);
        this.pokemonsUrl.forEach(url => {
          this.pokemonService.getDetails(url)
            .subscribe(resp => {
              this.pokemonsDetail.push(resp);
            });
        });
      }
    );  
  }

  private getPokemonUrls(dataApi: any): string[] {
    return dataApi.map((pokemon:IPokemon) => pokemon.url)
  }

  public showPokemonDetail(selectedPokemon: IPokemon) {
    this.pokemonService.setPokemon(selectedPokemon);
    this.router.navigate(["pokemon-detail"])
  }
}
