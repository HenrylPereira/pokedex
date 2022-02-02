import { Component, Input, OnInit, Output } from '@angular/core';
import { Event, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IPokemon } from './IPokemons';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemons$!: Observable<IPokemon>;

  items = [{ label: 'Home' }]

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.pokemons$ = this.pokemonService.listaPokemons();
  }

  openDetails(id: number) {
    this.router.navigate(['pokemon-details',id]);
  }
}
