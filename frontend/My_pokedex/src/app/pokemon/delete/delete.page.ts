import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {

  pokemon_id:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonsService,
    private router:Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        this.pokemon_id = data.get('id');
      }
    );
  }

  deletePokemon(pokemonId:any){
    this.pokemonService.deletePokemon(pokemonId).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/pokemons']);
      },
      error => {
        console.error(error);
      }
    )
  }

}
