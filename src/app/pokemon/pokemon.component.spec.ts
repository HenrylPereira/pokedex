import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PokemonComponent } from "./pokemon.component";
import { PokemonModule } from "./pokemon.module";
import { RouterTestingModule } from '@angular/router/testing';

describe(PokemonComponent.name, () => {
  let fixture: ComponentFixture<PokemonComponent>;
  let component: PokemonComponent;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('without filter - should list 809 pokemons', done => {
    component.search();
    component.pokemons$.subscribe((list)=>{
      expect(list.length).toBe(809);
      done();
    })
  });

  it('with filter - should list 1 pokemon', done => {
    const filter = 'bulbasaur';
    component.search(filter);
    component.pokemons$.subscribe((list)=>{
      expect(list.length).toBe(1);
      done();
    })
  });

  it('NgOnInit should populate list of pokemons', done => {
    component.ngOnInit();
    component.pokemons$.subscribe((list)=>{
      expect(list.length).toBe(809);
      done();
    })
  });

  it('NgOnInit should populate list of pokemons', () => {
    const name = 'ivysaur';
    const navigateSpy = spyOn(router, 'navigate');
    component.openDetails(name);
    expect(navigateSpy).toHaveBeenCalledWith([ 'pokemon-details', 'ivysaur' ]);
  });
})
