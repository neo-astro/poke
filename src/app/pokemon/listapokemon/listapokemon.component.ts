import { Component, OnInit } from '@angular/core';
import {  Pokemon } from '../interfaces/pokemon.interface';
import { PokemonfetchService } from '../services/pokemonfetch.service';
@Component({
  selector: 'app-listapokemon',
  templateUrl: './listapokemon.component.html',
  styleUrls: ['./listapokemon.component.css']
})
export class ListapokemonComponent implements OnInit {
  listaPokemons:Pokemon[] = []
  page = 0
  search:string =''
  constructor(private apiPokemon: PokemonfetchService) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons(){
    this.apiPokemon.getAllPokemons().subscribe(result =>{
      this.listaPokemons=result
      console.log('haciendo el fetch', result);

    })
  }

  // buttoms
  btnNext(){
    this.page +=5
    console.log(this.page);
  }

  btnPrevious(){
    if (this.page>0){
      this.page -= 5
      console.log(this.page);
    }
  }

  saveSearch(data:string){
    this.page=0
    this.search = data
  }
}
