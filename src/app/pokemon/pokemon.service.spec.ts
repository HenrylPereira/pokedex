import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PokemonService } from './pokemon.service';

const mockData = {
  api: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=809',
  data:
    {
      "count": 1118,
      "next": "https://pokeapi.co/api/v2/pokemon/?offset=809&limit=309",
      "previous": null,
      "results": [
        {
          "name": "bulbasaur",
          "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
          "name": "ivysaur",
          "url": "https://pokeapi.co/api/v2/pokemon/2/"
        }
      ]
    }
}

describe(PokemonService.name, () => {
  let service: PokemonService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PokemonService,
      ]
    });
    service = TestBed.inject(PokemonService);
    httpTestingController = TestBed.inject(HttpTestingController)
  })

  it(`#${PokemonService.prototype.listaPokemons.name} should return list of pokemons`, done => {
    service.listaPokemons().subscribe(pokemons => {
      expect(pokemons[0].name).toBe('bulbasaur');
      done();
    });
    httpTestingController
      .expectOne(mockData.api)
      .flush(mockData.data);
  });
});
