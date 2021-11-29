import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  pokemonForm: FormGroup;
  pokemon: any;
  pokemon_id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonsService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
    this.pokemonForm = this.formBuilder.group({
      id: [''],
      nombre: [''],
      altura: [],
      categoria: [''],
      peso: [],
      habilidad: [''],
      tipo: [''],
      link: ['']
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        this.pokemon_id = data.get('id');

        this.pokemonService.getPokemonsId(this.pokemon_id).subscribe(
          response => {
            console.log(response);
            this.pokemon = response
            this.pokemonForm.patchValue(response);
          },
          error => {
            console.error(error);
          }
        )
      }
    );
  }

  EdiPokemon(pokemon: any) {
    this.pokemonService.updatePokemon(this.pokemon_id, pokemon).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/pokemons']);
      },
      error => {
        console.error(error);
      }
    );
  }


}
