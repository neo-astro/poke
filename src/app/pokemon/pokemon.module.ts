import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListapokemonComponent } from './listapokemon/listapokemon.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { PokemonfetchService } from './services/pokemonfetch.service';


@NgModule({
  declarations: [
    ListapokemonComponent,
    FiltroPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [ListapokemonComponent]
})
export class PokemonModule { }
