import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { RouterModule, Routes } from '@angular/router';
import { PoModule } from '@po-ui/ng-components';
import { PoNavbarModule } from '@po-ui/ng-components';
import { PoPageDynamicSearchModule } from '@po-ui/ng-templates';

@NgModule({
  declarations: [PokemonComponent],
  imports: [
    CommonModule,
    RouterModule,
    PoModule,
    PoPageDynamicSearchModule
  ],
  exports: [PokemonComponent]
})
export class PokemonModule { }
