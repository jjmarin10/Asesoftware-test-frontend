import { Injectable } from '@angular/core';
import { environment } from "../../../environment/environment";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPokemon } from '../models/pokemon.interface';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  private pokemon$ = new BehaviorSubject<any>({});
  selectedPokemon = this.pokemon$.asObservable();

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<any> {
    return this.httpClient.get(`${environment.SERVER_API_URL}/pokemon`);
  }

  public getDetails(pokemonUrl: string): Observable<IPokemon> {
    return this.httpClient.get<IPokemon>(`${pokemonUrl}`);
  }

  public setPokemon(pokemon: IPokemon) {
    this.pokemon$.next(pokemon);
  }
  
}
