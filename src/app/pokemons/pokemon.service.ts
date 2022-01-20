import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemons } from './pokemon/pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  listaPokemons(): Observable<Pokemons> {
    return this.http.get<Pokemons>(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118`);
  }
}
