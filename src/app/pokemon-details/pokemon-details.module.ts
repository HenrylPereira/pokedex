import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailsComponent } from './pokemon-details.component';
import { RouterModule } from '@angular/router';
import { PoDynamicModule, PoModule } from '@po-ui/ng-components';
import { PoTableModule } from '@po-ui/ng-components';
import { PoBreadcrumbModule } from '@po-ui/ng-components';
import { PoPageModule } from '@po-ui/ng-components';
import { PokemonDetailsService } from './pokemon-details.service';


@NgModule({
  declarations: [PokemonDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    PoDynamicModule,
    PoModule,
    PoTableModule,
    PoBreadcrumbModule,
    PoPageModule
  ],
  exports: [PokemonDetailsComponent],
  providers: [PokemonDetailsService]
})
export class PokemonDetailsModule { }
