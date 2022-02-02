import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonComponent
  },
  {
    path: 'pokemon-details/:id',
    component: PokemonDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
