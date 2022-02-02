import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoDynamicViewField } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { PokemonDetails } from './pokemon-details';
import { PokemonDetailsService } from './pokemon-details.service';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})

export class PokemonDetailsComponent implements OnInit {
  public pokemonid!: number;
  private detailsList$!: Observable<PokemonDetails>;
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
    //{ property: 'sprites', label: 'sprites' },
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

  public employee = {
  };

  public columns = [
    { property: 'stat', label: 'Estatística' },
    { property: 'effort', label: 'Esforço' },
    { property: 'base_stat', label: 'Estatística base' },
  ];

  public items = []

  ngOnInit() {
    this.getId();
    this.injection();
  }

  getId(){
    this.route.params.subscribe((id: any)=>{
      this.pokemonid = id.id;
    })
  }

  injection(){
    this.detailsList$ = this.pokemonDetailsService.listaPokemonDetails(this.pokemonid);
    let abilitiesList = '';
    let formsList = '';
    let movesList = '';
    let typesList = '';
    let itensList = '';
    this.detailsList$.forEach(
      (element) => {
        element.abilities.forEach((abilities:any) => {
          abilitiesList = abilitiesList ? abilitiesList + ", " + abilities.ability.name : abilities.ability.name;
          element.abilities = abilitiesList;
        });
        element.forms.forEach((forms:any) => {
          formsList = formsList ? formsList + ", " + forms.name : forms.name;
          element.forms = formsList;
        });
        element.moves.forEach((moves:any) => {
          movesList = movesList ? movesList + ", " + moves.move.name : moves.move.name;
          element.moves = movesList;
        });
        element.types.forEach((types:any) => {
          typesList = typesList ? typesList + ", " + types.type.name : types.type.name;
          element.types = typesList;
        });
        element.held_items.forEach((items:any) => {
          itensList = itensList ? itensList + ", " + items.item.name : items.item.name;
          element.held_items = itensList;
        });
        element.stats.forEach((stats:any) => {
          stats.stat = stats.stat.name;
        });
        this.isDefault = false ? element.is_default == false : true;
        element.species = element.species.name;
        this.items = element.stats;
        this.employee = element;
        this.title = element.name;
      }
    )
  }


}
