import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonsService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  pokemon: any;

  constructor(
    private pokemonService: PokemonsService,
    private activatedRoute: ActivatedRoute,
    public comon: CommonModule
  ) {

   }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        const pokemon_id = data.get('id');
        this.pokemonService.getPokemonsId(pokemon_id).subscribe(
          response => {
            this.pokemon = response[0];
            console.log(this.pokemon);
          },
          error => {
            console.error(error);
          }
        )
      }
    );
  }




}
