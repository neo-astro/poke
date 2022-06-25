import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(lp: Pokemon[], page: number = 0,search: string= ''): Pokemon[] {
    if (search.length === 0) {return lp.slice(page, page + 5)}

    const listaSearch = lp.filter((pokemon) => {return pokemon.name.includes(search)})
    console.log(typeof(listaSearch));
    console.log(listaSearch.slice(page, page + 5));
    return listaSearch.slice(page, page + 5)
  }

}
