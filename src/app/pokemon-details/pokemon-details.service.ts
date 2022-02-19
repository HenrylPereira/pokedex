import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { PokemonDetails } from './pokemon-details';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailsService {

constructor(private http: HttpClient) { }

listaPokemonDetails(nome: string): Observable<PokemonDetails> {
  return this.http.get<PokemonDetails>(`http://pokeapi.co/api/v2/pokemon/${nome}`);
}

}
