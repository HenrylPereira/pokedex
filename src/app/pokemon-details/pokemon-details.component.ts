import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoDynamicViewField } from '@po-ui/ng-components';
import { map, Observable, tap } from 'rxjs';
import { PokemonDetails } from './pokemon-details';
import { PokemonDetailsService } from './pokemon-details.service';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { Items } from './interfaces/items';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})

export class PokemonDetailsComponent implements OnInit {
  public pokemonName!: string;
  public detailsList$!: Observable<PokemonDetails>;
  private isDefault: boolean = true;

  constructor(private route: ActivatedRoute, private pokemonDetailsService: PokemonDetailsService) {
  }

  fields: Array<PoDynamicViewField> = [
    { property: 'name', label: 'Nome', order: 2 },
    { property: 'id', label: 'Número', divider: 'Informações', order: 1 },
    { property: 'order', label: 'Ordem'},
    { property: 'abilities', label: 'Habilidades', order: 2 },
    { property: 'base_experience', label: 'Experiência base', order: 3 },
    { property: 'forms', label: 'Formas' },
    { property: 'height', label: 'Altura'},
    { property: 'is_default', label: 'Padrão', tag: this.isDefault },
    { property: 'location_area_encounters', label: 'Áreas'},
    { property: 'moves', label: 'Movimentos', order: 0},
    { property: 'species', label: 'species' },
    { property: 'types', label: 'Tipos' },
    { property: 'weight', label: 'Peso' }
  ];

  public readonly actions: Array<any> = [
    { label: 'Voltar', url: '/' },
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Detalhes do pokemon' }]
  };

  public title: any = '';

  public employee!: PokemonDetails;

  public columns = [
    { property: 'stat', label: 'Estatística' },
    { property: 'effort', label: 'Esforço' },
    { property: 'base_stat', label: 'Estatística base' },
  ];

  public items!: Items;

  ngOnInit() {
    this.getName();
    this.injection();
  }

  getName(){
    this.route.params.subscribe((nome: any)=>{
      this.pokemonName = nome.nome;
    })
  }

  injection(){
    this.pokemonDetailsService.listaPokemonDetails(this.pokemonName).subscribe(
      (elements) => {
        this.employee = elements;
        this.items = elements.stats;
        this.items.forEach((item)=>{
          item.stat = item.stat.name;
        })
      }
    );
  }
}
