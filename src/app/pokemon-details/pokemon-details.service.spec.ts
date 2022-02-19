/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { mockData } from './mock/pokemon-details.mock';
import { PokemonDetailsService } from './pokemon-details.service';

describe('Service: PokemonDetails', () => {
  let service: PokemonDetailsService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ PokemonDetailsService ]
    });
    service = TestBed.inject(PokemonDetailsService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it(`#${PokemonDetailsService.prototype.listaPokemonDetails.name} should return details of pokemon`, done => {
    const name = 'bulbasaur';
    service.listaPokemonDetails(name).subscribe(pokemon => {
      expect(pokemon.id).toBe(1);
      done();
    });
    httpTestingController
      .expectOne(mockData.api)
      .flush(mockData.data);
  });
});
