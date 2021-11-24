import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(){
    return this.http.get<any>(`http://localhost:3000/pokemons`);
  }

  getPokemonsId(pok_id:any){
    return this.http.get<any>(`http://localhost:3000/pokemons/${pok_id}`);
  }

  addPokemon(pokemon:any){
    return this.http.post<any>(`http://localhost:3000/pokemons`,pokemon);
  }

  updatePokemon(pok_id:any, pokemon: any) {
    return this.http.put<any>(`http://localhost:3000/pokemons/${pok_id}`, pokemon);
  }

  deletePokemon(pok_id:any){
    return this.http.delete<any>(`http://localhost:3000/pokemons/${pok_id}`);
  }

}
