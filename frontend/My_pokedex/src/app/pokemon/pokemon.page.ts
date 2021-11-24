import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../_services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  pokemones : any[] = [
    {
      "nombre" : "pikachu",
      "tipo" : "electrico"
    },
    {
      "nombre" : "a",
      "tipo" : "fantasma"
    }
  ] 

  constructor(
    private  pokemonService: PokemonsService
  ) { }

  ngOnInit() {
  }

  
  ionViewWillEnter(): void {
    this.pokemonService.getPokemons().subscribe(data => {
      this.pokemones = data;
    })
  }

}
