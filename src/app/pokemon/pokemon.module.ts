import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { PoModule } from '@po-ui/ng-components';
import { PoNavbarModule } from '@po-ui/ng-components';
import { PoPageDynamicSearchModule } from '@po-ui/ng-templates';
import { PokemonService } from './pokemon.service';

@NgModule({
  declarations: [PokemonComponent],
  imports: [
    CommonModule,
    RouterModule,
    PoModule,
    PoPageDynamicSearchModule
  ],
  exports: [PokemonComponent],
  providers: [ PokemonService ]
})
export class PokemonModule { }
