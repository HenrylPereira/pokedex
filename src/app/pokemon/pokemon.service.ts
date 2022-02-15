import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, observable, Observable, tap } from 'rxjs';
import { IPokemon } from './IPokemons';
import { Pokemons } from './pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  listaPokemons(): Observable<Pokemons> {
    return this.http.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=809`)
    .pipe(
      map((results)=>results.results)
    )
  }
}
