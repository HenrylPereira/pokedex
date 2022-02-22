import { Router, ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { PokemonDetailsComponent } from './pokemon-details.component';
import { PokemonDetailsModule } from './pokemon-details.module';
import { of } from 'rxjs';

describe(PokemonDetailsComponent.name, () => {
  let fixture: ComponentFixture<PokemonDetailsComponent>;
  let component: PokemonDetailsComponent;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailsModule, RouterTestingModule],
      providers: [{provide: ActivatedRoute, useValue: {params: of({nome: 'bulbasaur'})}}]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getName', () => {
    component.getName();
    expect(component.pokemonName).toBe('bulbasaur');
  });
})
