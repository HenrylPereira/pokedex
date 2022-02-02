import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PokemonDetailsModule } from './pokemon-details/pokemon-details.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PokemonModule,
    PokemonDetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
