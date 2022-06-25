import { Pokemon } from './../interfaces/pokemon.interface';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiPoke} from '../interfaces/pokemon.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonfetchService {
  urlApiPokemon: string = 'https://pokeapi.co/api/v2'

  constructor(private http: HttpClient) {}

  getAllPokemons():Observable<Pokemon[]> {
    console.log('fecth',this.http.get<ApiPoke>(`${this.urlApiPokemon}/pokemon?limit=1500`));
    const l = this.http.get<ApiPoke>(`${this.urlApiPokemon}/pokemon?limit=1500`).pipe(
      map( this.transforToMyData)
    )
    console.log('fecth cambios', l);
    return l
  }

  private transforToMyData(data: ApiPoke){

    const lista:Pokemon[] = data.results.map((poke):Pokemon =>{
      const url = poke.url.split('/')
      const id = url[6]
      const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
      return {
        id ,
        name: poke.name,
        imagen,
      }

    })
    console.log(typeof(lista));
    console.log('transfor method',lista);

    return lista
  }
}
