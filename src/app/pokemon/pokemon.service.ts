import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from './IPokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  listaPokemons(): Observable<IPokemon> {
    return this.http.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898`);
  }
}
