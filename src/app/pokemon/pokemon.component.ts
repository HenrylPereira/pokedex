import { Component, Input, OnInit, Output } from '@angular/core';
import { Event, Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { IPokemon } from './IPokemons';
import { PokemonService } from './pokemon.service';
import { Pokemon, Pokemons } from './pokemons';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemons$!: Observable<Pokemons>;
  items = [{ label: 'Home' }]


  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.search();
  }

  openDetails(name: string): void {
    this.router.navigate(['pokemon-details', name]);
  }

  search(filter?: string){
    if(filter != undefined){
      this.pokemons$ = this.pokemonService.listaPokemons().pipe(
        map(pokemons => pokemons.filter((pokemons:Pokemon) => pokemons.name.includes(filter)))
      )
    }else{
      this.pokemons$ = this.pokemonService.listaPokemons();
    }
  }
}
