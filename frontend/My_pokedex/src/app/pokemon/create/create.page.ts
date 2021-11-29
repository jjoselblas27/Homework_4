import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonsService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  PokemonForm: FormGroup;


  constructor(
    private pokemonService: PokemonsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.PokemonForm = this.formBuilder.group({
      nombre : [''], 
      altura: [],
      categoria: [''],
      peso: [],
      habilidad: [''],
      tipo: [''],
      link: ['']
    })
  }

  ngOnInit() {
  }

  createPokemon(values: any){
    this.pokemonService.addPokemon(values).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/pokemons']);
      },
      error => {
        console.error(error);
      }
    )
  };

}
