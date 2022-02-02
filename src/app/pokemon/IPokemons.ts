import { Pokemon } from "./pokemons";

export interface IPokemon {
  count: string,
  next: boolean,
  previus: boolean,
  results: Pokemon[]; //Pokemons
}
