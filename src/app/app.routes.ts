import { Routes } from '@angular/router';
import { DetallesPokemonComponent } from './components/detalles-pokemon/detalles-pokemon.component';
import { TablaPokemonComponent } from './components/tabla-pokemon/tabla-pokemon.component';

export const routes: Routes = [
    {path: 'home', component: TablaPokemonComponent},
    {path: 'DetallesPokemon/id', component: DetallesPokemonComponent},
    {path:'', pathMatch: 'full', redirectTo: 'home'},
    {path:'**', pathMatch: 'full', redirectTo: 'home'},
];
